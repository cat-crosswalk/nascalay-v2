import colors from "@/theme/colors";

export default {
  default: {
    border: `2px solid ${colors.border.primary.default}`,
    boxShadow: `6px 6px 0 0 ${colors.border.primary.default}`,
  },
} as const satisfies Record<string, React.CSSProperties>;
