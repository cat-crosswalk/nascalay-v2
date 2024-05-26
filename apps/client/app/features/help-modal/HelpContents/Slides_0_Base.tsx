import { border, colors, rounded } from "@/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { TabPanel } from "react-aria-components";

export const SlidesBase = styled(motion(TabPanel))`
  ${border.default}
  ${rounded.default}
  background: ${colors.chromatic.blue.default};

  flex: 0;
  width: 100%;

  box-sizing: border-box;
`;
