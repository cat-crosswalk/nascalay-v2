import styled from "@emotion/styled";
import type { RefObject } from "react";
import type { MouseHandlers } from "./types";

interface Props {
  canvasRef: RefObject<HTMLCanvasElement>;
  mouseHandlers: MouseHandlers;
  isLocked?: boolean;
}

export function Artboard({ canvasRef, mouseHandlers, isLocked }: Props) {
  return (
    <Canvas
      ref={canvasRef}
      width={640}
      height={480}
      {...mouseHandlers}
      style={{
        pointerEvents: isLocked ? "none" : "auto",
      }}
    />
  );
}

const Canvas = styled.canvas`
  border: 1px solid black;
`;
