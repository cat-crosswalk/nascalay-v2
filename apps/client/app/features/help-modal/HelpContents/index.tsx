import styled from "@emotion/styled";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useCallback, useId, useRef, useState } from "react";
import { Collection } from "react-aria-components";
import { Indicator } from "./Indicator";
import { Slides_1 } from "./Slides_1";

const Slides = [Slides_1, Slides_1, Slides_1, Slides_1, Slides_1].map(
  (Slide, index) => [Slide, index] as const,
);

export function HelpContents() {
  const slidesWrapRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);

  const id = useId();

  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const select = useCallback((idx: number) => {
    setIndex(idx);

    const slidesWrap = slidesWrapRef.current;
    if (slidesWrap === null) return;

    animationRef.current?.stop();
    animationRef.current = animate(
      slidesWrap.scrollLeft,
      slidesWrap.scrollWidth * (idx / Slides.length),
      {
        type: "spring",
        bounce: 0.2,
        duration: 0.00001,
        onUpdate: (v) => {
          slidesWrap.scrollLeft = v;
        },
        onPlay: () => {
          // Disable scroll snap while the animation is going or weird things happen.
          slidesWrap.style.scrollSnapType = "none";
        },
        onComplete: () => {
          slidesWrap.style.scrollSnapType = "";
          animationRef.current = null;
        },
      },
    );
  }, []);

  return (
    <AnimatePresence>
      <Wrap>
        <SlidesWrap ref={slidesWrapRef}>
          <Collection items={Slides}>
            {([Slide, idx]) => (
              <SlideWrap id={`${idx}`}>
                <Slide />
              </SlideWrap>
            )}
          </Collection>
        </SlidesWrap>

        <Indicator currentIdx={index} total={Slides.length} select={select} />
      </Wrap>
    </AnimatePresence>
  );
}

const Wrap = styled(motion.div)`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-rows: 1fr auto;
  grid-gap: 2rem;
`;

const SlidesWrap = styled.div`
  display: grid;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;

  grid-template-columns: repeat(${Slides.length}, 100%);

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  margin-left: -1rem;
  margin-right: -1rem;
`;

const SlideWrap = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  height: 100%;
  width: calc(100% - 2rem);

  display: grid;
`;
