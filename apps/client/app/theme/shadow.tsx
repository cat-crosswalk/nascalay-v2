import { colors } from "@/theme";

export default {
  default: {
    boxShadow: `6px 6px 0 0 ${colors.border.primary.default}`,
  },
} as const satisfies Record<string, React.CSSProperties>;
