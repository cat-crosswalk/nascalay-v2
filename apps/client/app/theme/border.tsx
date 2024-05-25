import { colors } from "@/theme";

export default {
  default: {
    border: `2px solid ${colors.border.primary.default}`,
  },
  disabled: {
    border: `2px solid ${colors.border.primary.default}`,
  },
} as const satisfies Record<string, React.CSSProperties>;
