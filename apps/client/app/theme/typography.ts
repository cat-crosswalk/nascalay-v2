// 値部分をリテラルとして吐いてほしいので https://github.com/microsoft/TypeScript/issues/32063 が解決されるまでは ts ファイルとして置く
// json への移行を簡単にするために、json レベルの記法のみにする

import type { CSSProperties } from "react";

export default {
  /**
   * font-size: 32px
   */
  heading1: {
    fontSize: "2rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  /**
   * font-size: 24px
   */
  heading2: {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  /**
   * font-size: 20px
   */
  heading3: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  /**
   * font-size: 18px
   */
  heading4: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  /**
   * font-size: 16px
   */
  heading5: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },

  /**
   * font-size: 18px
   */
  body1: {
    fontSize: "1.125rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  /**
   * font-size: 16px
   */
  body2: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  /**
   * font-size: 14px
   */
  body3: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
} as const satisfies Record<string, CSSProperties>;
