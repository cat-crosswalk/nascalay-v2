import type { MotionProps } from "framer-motion";
import { SlidesBase } from "./Slides_0_Base";

interface Props extends MotionProps {
  id?: string;
}

export function Slides_1({ id, ...props }: Props) {
  return <SlidesBase id={id} {...props} />;
}
