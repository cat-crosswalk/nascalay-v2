export const penTypes = ["pen", "eraser", "bucket"] as const;
export type PenType = (typeof penTypes)[number];

export interface Pos {
  x: number;
  y: number;
}

export type MouseHandlers = Required<
  Pick<
    React.DOMAttributes<HTMLElement>,
    | "onMouseDown"
    | "onMouseMove"
    | "onMouseUp"
    | "onMouseLeave"
    | "onMouseEnter"
  >
>;

/**
 * 色を扱いやすくするための型
 * r, g, b, a はそれぞれ 0 から 255 の範囲の整数
 */
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}
export type LikeEqualColor = (a: Color, b: Color) => boolean;
