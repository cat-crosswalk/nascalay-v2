import { border, colors, rounded } from "@/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SlidesBase = styled(motion.section)`
  ${border.default}
  ${rounded.default}
  background: ${colors.chromatic.blue.default};

  flex: 0;
  width: 100%;

  box-sizing: border-box;
`;
