// ref: https://en.wikipedia.org/wiki/Flood_fill

import type { Color, LikeEqualColor } from "./types";
import { colorsToRaw, equalColor, hexToColor, rawToColors } from "./utils";

interface Seed {
  xRange: [number, number];
  y: number;
  dy: -1 | 1;
}

/**
 * seed の範囲を対象色がある限り左に広げる
 *
 * 左方向に広がった場合は U字ターンしている可能性があるため、はみ出た部分を折り返す形の seed として追加する
 *
 * @returns 左端の x 座標
 */
function searchLeft(
  seed: Readonly<Seed>,
  { inside, set, pushSeed }: Operations,
): number {
  let x = seed.xRange[0];
  if (!inside(x, seed.y)) return x;

  while (inside(x - 1, seed.y)) {
    x--;
    set(x, seed.y);
  }

  if (x < seed.xRange[0]) {
    pushSeed({
      xRange: [x, seed.xRange[0] - 1],
      y: seed.y - seed.dy,
      dy: -seed.dy as -1 | 1,
    });
  }

  return x;
}

function createInside(
  data: Readonly<Color[][]>,
  xRange: readonly [number, number],
  yRange: readonly [number, number],
  targetColor: Readonly<Color>,
  likeEqualColor: LikeEqualColor,
): Operations["inside"] {
  return (x, y) =>
    x >= xRange[0] &&
    x < xRange[1] &&
    y >= yRange[0] &&
    y < yRange[1] &&
    likeEqualColor(data[y][x], targetColor);
}
function createSet(data: Color[][], color: Color): Operations["set"] {
  return (x, y) => {
    data[y][x] = color;
  };
}

interface Operations {
  /**
   * キャンバス内の有効な座標かつ targetColor と等しいかどうかを返す
   */
  inside: (x: number, y: number) => boolean;
  /**
   * キャンバスの座標 (x, y) を塗りつぶす色で塗る
   */
  set: (x: number, y: number) => void;
  pushSeed: (seed: Seed) => void;
}

/**
 * canvas を flood fill を用いて塗りつぶす
 *
 * アルゴリズム自体は wiki にあるものそのまま (ref: https://en.wikipedia.org/wiki/Flood_fill)
 *
 * @param canvas 塗りつぶす対象の canvas
 * @param x 塗りつぶしの始点
 * @param y 塗りつぶしの始点
 * @param colorCode 塗りつぶす色
 * @param widthRange canvas の塗りつぶし範囲の横幅 @default [0, canvas.width]
 * @param heightRange canvas の塗りつぶし範囲の縦幅 @default [0, canvas.height]
 * @param likeEqualColor 色が等しいかどうかを判定する関数 @default 完全一致
 */
export function bucketFill(
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  colorCode: `#${string}`,
  widthRange: [number, number] = [0, canvas.width],
  heightRange: [number, number] = [0, canvas.height],
  likeEqualColor: LikeEqualColor = equalColor,
) {
  const ctx = canvas.getContext("2d");
  if (ctx === null) {
    return;
  }

  const width = canvas.width;
  const height = canvas.height;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const formattedData = rawToColors(data, width, height);
  const targetColor = formattedData[y][x];
  const color = hexToColor(colorCode);
  if (color === null) {
    console.error("invalid color");
    return;
  }
  if (likeEqualColor(color, targetColor)) return;

  const seeds: Seed[] = [
    { xRange: [x, x], y, dy: 1 },
    { xRange: [x, x], y: y - 1, dy: -1 },
  ];
  const operations: Operations = {
    inside: createInside(
      formattedData,
      widthRange,
      heightRange,
      targetColor,
      likeEqualColor,
    ),
    set: createSet(formattedData, color),
    pushSeed: (seed: Seed) => seeds.push(seed),
  };

  if (!operations.inside(x, y)) return;
  while (seeds.length > 0) {
    // biome-ignore lint/style/noNonNullAssertion: while の条件式から pop は undefined にならない
    const { xRange, y, dy } = seeds.pop()!;

    let x = searchLeft({ xRange, y, dy }, operations);
    let [leftX, rightX] = xRange;

    while (leftX <= rightX) {
      // xRange の左端から右に向かって塗りつぶす
      while (operations.inside(leftX, y)) {
        operations.set(leftX, y);
        leftX++;
      }

      // 塗った部分があれば、その範囲を次の y に対して seed として追加する
      if (leftX > x) {
        operations.pushSeed({
          xRange: [x, leftX - 1],
          y: y + dy,
          dy,
        });
      }

      // 右側が溢れた場合は U字ターンしている可能性があるため、はみ出た部分を折り返す形の seed として追加する
      if (leftX - 1 > rightX) {
        operations.pushSeed({
          xRange: [rightX + 1, leftX - 1],
          y: y - dy,
          dy: -dy as -1 | 1,
        });
      }

      // xRange のうち、塗られない部分はスキップ
      leftX++;
      while (leftX < rightX && !operations.inside(leftX, y)) {
        leftX++;
      }

      x = leftX;
    }
  }

  imageData.data.set(colorsToRaw(formattedData, width, height));
  ctx.putImageData(imageData, 0, 0);
}
