// 色部分をリテラルとして吐いてほしいので https://github.com/microsoft/TypeScript/issues/32063 が解決されるまでは ts ファイルとして置く
// json への移行を簡単にするために、json レベルの記法のみにする

export default {
  background: {
    primary: {
      default: "#ffffff",
    },
    secondary: {
      default: "#dfdfdf",
    },
  },
  text: {
    primary: {
      default: "#000000",
      disabled: "#676767",
    },
    secondary: {
      default: "rgb(0 0 0 / 0.7)",
    },
    tertiary: {
      default: "rgb(0 0 0 / 0.3)",
    },
  },
  chromatic: {
    red: {
      default: "#ffbbb0",
      hover: "#f8a699",
      active: "#f48776",
      disabled: "#dac5c2",
    },
    blue: {
      default: "#a0a7e9",
      vivid: "#4356ff",
    },
    yellow: {
      default: "#f7e091",
      hover: "#ffeba8",
      active: "#efd371",
      disabled: "#d7d2bf",
      "hover-secondary": "#fff1c0",
    },
  },
} as const;
