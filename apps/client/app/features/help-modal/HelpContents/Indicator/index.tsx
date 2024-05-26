import { border, colors, rounded } from "@/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useCallback, useId } from "react";
import { Button, Tab, TabList } from "react-aria-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Props {
  currentIdx: number;
  total: number;
  select: (idx: number) => void;
}

export function Indicator({ currentIdx, total, select }: Props) {
  const id = useId();

  const isFirst = currentIdx === 0;
  const isLast = currentIdx === total - 1;

  const prev = useCallback(() => select(currentIdx - 1), [currentIdx, select]);
  const next = useCallback(() => select(currentIdx + 1), [currentIdx, select]);

  return (
    <Wrap aria-label="遊び方">
      <WithButtonWrap>
        <IconButton isDisabled={isFirst} onPress={prev}>
          <MdArrowBack size={24} />
        </IconButton>
        <IndicatorsWrap>
          {Array.from({ length: total }, (_, idx) => idx).map((idx) => (
            <IndicatorTab key={idx} id={`${idx}`}>
              <IndicatorDefault role="img" aria-label={`page ${idx}`} />
              {idx === currentIdx && (
                <IndicatorSelected
                  layoutId={id}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
            </IndicatorTab>
          ))}
        </IndicatorsWrap>
        <IconButton isDisabled={isLast} onPress={next}>
          <MdArrowForward size={24} />
        </IconButton>
      </WithButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: grid;
  place-items: center;
`;

const WithButtonWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  align-items: center;
`;

const IconButton = styled(Button)`
  ${rounded.default}
  ${border.default}

  background: ${colors.chromatic.red.default};
  color: ${colors.text.primary.default};

  padding: 0.375rem;

  &:disabled {
    ${border.disabled}

    background: ${colors.chromatic.red.disabled};
    color: ${colors.text.secondary.default};
  }
`;

const IndicatorsWrap = styled(TabList)`
  display: grid;
  grid-auto-flow: column;

  gap: 0.6875rem;
`;

const IndicatorTab = styled(Tab)`
  display: grid;
  place-items: center;

  height: 0.75rem;
  width: 0.75rem;

  & > * {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const IndicatorDefault = styled.div`
  background: ${colors.text.secondary.default};
  border-radius: ${Number.MAX_SAFE_INTEGER}px;

  height: 0.5rem;
  width: 0.5rem;
`;

const IndicatorSelected = styled(motion.div)`
  background: ${colors.text.primary.default};
  border-radius: ${Number.MAX_SAFE_INTEGER}px;

  height: 0.75rem;
  width: 0.75rem;
`;
