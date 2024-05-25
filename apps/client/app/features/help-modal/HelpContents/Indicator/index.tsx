import { border, colors, rounded } from "@/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useId, useMemo } from "react";
import { Button } from "react-aria-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Props {
  currentIdx: number;
  total: number;
  select: (idx: number) => void;
}

export function Indicator({ currentIdx, total, select }: Props) {
  const handlers = useMemo(() => {
    return Array.from(
      { length: total },
      (_, idx) => [idx, () => select(idx)] as const,
    );
  }, [total, select]);

  const id = useId();

  return (
    <Wrap>
      <WithButtonWrap>
        <IconButton
          isDisabled={currentIdx === 0}
          onPress={handlers[currentIdx - 1]?.[1]}
        >
          <MdArrowBack size={24} />
        </IconButton>
        <IndicatorsWrap>
          {handlers.map(([idx, handler]) => (
            <IndicatorButton key={idx} onPress={handler}>
              <IndicatorDefault />
              {idx === currentIdx && <IndicatorSelected layoutId={id} />}
            </IndicatorButton>
          ))}
        </IndicatorsWrap>
        <IconButton
          isDisabled={currentIdx === total - 1}
          onPress={handlers[currentIdx + 1]?.[1]}
        >
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

const IndicatorsWrap = styled.div`
  display: grid;
  grid-auto-flow: column;

  gap: 0.6875rem;
`;

const IndicatorButton = styled(Button)`
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
