// ref: https://github.com/cat-crosswalk/nascalay-frontend/blob/main/src/components/Canvas/bucketFill.ts

import type { Color, LikeEqualColor } from "./types";
import { colorsToRaw, equalColor, hexToColor, rawToColors } from "./utils";

// https://nullpon.moe/dev/sample/canvas/bucketfill.html めちゃめちゃ参考にしてる
// シードフィルアルゴリズムで塗りつぶす

/**
 * 指定された座標から右方向にまっすぐ targetColor と等しい色を塗りつぶす
 *
 * @returns 右端の x 座標
 */
function drawToRight(
  data: Color[][],
  x: number,
  y: number,
  color: Color,
  widthRange: readonly [number, number],
  targetColor: Color,
  likeEqualColor: LikeEqualColor,
) {
  let rightEnd = null;
  for (let nowX = x + 1; nowX < widthRange[1]; nowX++) {
    const nowColor = data[y][nowX];
    if (!likeEqualColor(nowColor, targetColor)) break;
    data[y][nowX] = color;
    rightEnd = nowX;
  }
  return rightEnd;
}

/**
 * 指定された座標から左方向にまっすぐ targetColor と等しい色を塗りつぶす
 *
 * @returns 左端の x 座標
 */
function drawToLeft(
  data: Color[][],
  x: number,
  y: number,
  color: Color,
  widthRange: readonly [number, number],
  targetColor: Color,
  likeEqualColor: LikeEqualColor,
) {
  let leftEnd = null;
  for (let nowX = x; nowX >= widthRange[0]; nowX--) {
    const nowColor = data[y][nowX];
    if (!likeEqualColor(nowColor, targetColor)) break;
    data[y][nowX] = color;
    leftEnd = nowX;
  }
  return leftEnd;
}

/**
 * seeds を破壊的に更新する
 */
function updateSeeds(
  data: Readonly<Color[][]>,
  xLeft: number,
  xRight: number,
  y: number,
  seeds: { x: number; y: number }[],
  targetColor: Color,
  heightRange: readonly [number, number],
  likeEqualColor: LikeEqualColor,
) {
  if (y < heightRange[0] || y >= heightRange[1]) return;

  let prevIsTarget = false;
  for (let nowX = xLeft; nowX <= xRight; nowX++) {
    const nowColor = data[y][nowX];
    if (likeEqualColor(nowColor, targetColor)) {
      if (!prevIsTarget) {
        seeds.push({ x: nowX, y });
      }
      prevIsTarget = true;
    } else {
      prevIsTarget = false;
    }
  }
}

export function bucketFill(
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  colorCode: `#${string}`,
  widthRange?: [number, number],
  heightRange?: [number, number],
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

  const xRange = widthRange ?? [0, width];
  const yRange = heightRange ?? [0, height];

  const seeds = [{ x, y }];
  while (seeds.length > 0) {
    // biome-ignore lint/style/noNonNullAssertion: while の条件式から pop は undefined にならない
    const { x, y } = seeds.pop()!;

    // 左右に塗りつぶす
    const leftX =
      drawToLeft(
        formattedData,
        x,
        y,
        color,
        xRange,
        targetColor,
        likeEqualColor,
      ) ?? x;
    const rightX =
      drawToRight(
        formattedData,
        x,
        y,
        color,
        xRange,
        targetColor,
        likeEqualColor,
      ) ?? x;

    updateSeeds(
      formattedData,
      leftX,
      rightX,
      y + 1,
      seeds,
      targetColor,
      yRange,
      likeEqualColor,
    );
    updateSeeds(
      formattedData,
      leftX,
      rightX,
      y - 1,
      seeds,
      targetColor,
      yRange,
      likeEqualColor,
    );
  }

  imageData.data.set(colorsToRaw(formattedData, width, height));
  ctx.putImageData(imageData, 0, 0);
}
