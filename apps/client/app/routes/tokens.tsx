import card from "@/theme/card";
import colors from "@/theme/colors";
import typography from "@/theme/typography";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type React from "react";
import { Fragment } from "react";

export default function Tokens() {
  return (
    <div>
      <Card>
        <Title>Typography</Title>
        {Object.entries(typography).map(([key, value]) => {
          return (
            <div key={key} css={css(value)}>
              {key}
            </div>
          );
        })}
      </Card>
      <Card>
        <Title>Colors</Title>
        {Object.entries(colors).map(([key, value]) => {
          return (
            <section key={key}>
              <SubTitle>{key}</SubTitle>
              {Object.entries(
                // NOTE: なんか Union のまま entries 通すと value が any になっちゃうからキャスト
                value as Record<string, Record<string, string>>,
              ).map(([key, value]) => {
                return (
                  <Grid key={key}>
                    <GridTitle
                      style={
                        {
                          "--row-span": Object.keys(value).length + 1,
                        } as React.CSSProperties
                      }
                    >
                      {key}
                    </GridTitle>
                    {Object.entries(value).map(([key, value]) => {
                      return (
                        <Fragment key={key}>
                          {key}
                          <Sample style={{ background: value }} />
                        </Fragment>
                      );
                    })}
                  </Grid>
                );
              })}
            </section>
          );
        })}
      </Card>
    </div>
  );
}

const Card = styled.section`
  ${card.default}

  padding: 2rem 3rem;
  margin: 2rem;
`;

const Title = styled.h2`
  ${typography.heading1}

  color: ${colors.text.primary.default};

  border: 0 solid ${colors.chromatic.blue.default};

  border-top-width: 4px;
  border-bottom-width: 4px;

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.h3`
  ${typography.heading2}

  color: ${colors.text.primary.default};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10rem 8rem 8rem;
  grid-gap: 1rem;
`;
const GridTitle = styled.div`
  ${typography.heading4}

  color: ${colors.text.primary.default};

  grid-row: 1 / span var(--row-span, 1);
`;

const Sample = styled.div`
  height: 2rem;
  width: 8rem;

  box-shadow: 0 0 4px -1px ${colors.border.primary.default};
`;
