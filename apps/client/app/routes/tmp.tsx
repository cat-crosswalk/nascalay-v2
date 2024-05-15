import { css } from "@emotion/react";
import styled from "@emotion/styled";

const style1 = css`
  background: blue;
`;

export default function Tmp() {
  return <H1 css={style1}>hoge</H1>;
}

const H1 = styled.h1`
  color: red;
`;
