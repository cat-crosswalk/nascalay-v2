import { colors } from "@/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const style1 = css`
  background: ${colors.chromatic.red.default};
`;

export default function Tmp() {
  return <H1 css={style1}>hoge</H1>;
}

const H1 = styled.h1`
  color: ${colors.text.primary.default};
`;
