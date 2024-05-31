import type { Color, LikeEqualColor } from "./types";

export type CanvasData = ImageData;
export function getCanvasData(canvas: HTMLCanvasElement): CanvasData | null {
  const ctx = canvas.getContext("2d");
  if (ctx === null) return null;
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

export function applyCanvasData(canvas: HTMLCanvasElement, data: CanvasData) {
  const ctx = canvas.getContext("2d");
  if (ctx === null) return;
  ctx.putImageData(data, 0, 0);
}

/**
 * Color オブジェクトが厳密に等しいかどうかを判定する
 */
export function equalColor(a: Color, b: Color) {
  return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
}
/**
 * Color オブジェクトが指定された等しいかどうかを判定する
 * ただし、それぞれの差が range 以下であるときに等しいとみなす
 */
export function rangedEqualColor(range: number): LikeEqualColor {
  return (a: Color, b: Color) => {
    return (
      Math.abs(a.r - b.r) <= range &&
      Math.abs(a.g - b.g) <= range &&
      Math.abs(a.b - b.b) <= range &&
      Math.abs(a.a - b.a) <= range
    );
  };
}

/**
 * カラーコードから rgba 形式の Color オブジェクトを作る
 *
 * valid なのは #123, #1234, #123456, #12345678 の形式
 */
export function hexToColor(hex: `#${string}`): Color | null {
  // 16進数部分の長さが 3, 4, 6, 8 であるかどうかを判定
  if (
    /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex) ||
    /^#([A-Fa-f0-9]{4}){1,2}$/.test(hex)
  ) {
    let c = hex.substring(1).split("");
    // #12345678 の形式に統一
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2], "F", "F"];
    } else if (c.length === 4) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2], c[3], c[3]];
    } else if (c.length === 6) {
      c = [c[0], c[1], c[2], c[3], c[4], c[5], "F", "F"];
    }
    const num = Number.parseInt(`0x${c.join("")}`, 16);
    return {
      r: (num >> 24) & 255,
      g: (num >> 16) & 255,
      b: (num >> 8) & 255,
      a: num & 255,
    };
  }

  return null;
}

/**
 * Uint8ClampedArray から Color[][] へ変換する
 */
export function rawToColors(
  data: Uint8ClampedArray,
  width: number,
  height: number,
): Color[][] {
  console.assert(data.length === width * height * 4);
  const result = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const index = (i * width + j) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];
      row.push({ r, g, b, a });
    }
    result.push(row);
  }
  return result;
}
/**
 * Color[][] を Uint8ClampedArray に変換する
 */
export function colorsToRaw(
  data: Color[][],
  width: number,
  height: number,
): Uint8ClampedArray {
  const result = new Uint8ClampedArray(width * height * 4);
  for (let i = 0; i < height; i++) {
    const row = data[i];
    for (let j = 0; j < width; j++) {
      const index = (i * width + j) * 4;
      const color = row[j];
      result[index] = color.r;
      result[index + 1] = color.g;
      result[index + 2] = color.b;
      result[index + 3] = color.a;
    }
  }
  return result;
}
