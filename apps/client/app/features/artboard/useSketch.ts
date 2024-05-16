import { unreachable } from "@/utils/unreachable";
import type React from "react";
import { type RefObject, useCallback, useMemo, useRef } from "react";
import { bucketFill } from "./bucketFill";
import type { MouseHandlers, Pos } from "./types";
import { type CanvasData, getCanvasData } from "./utils";

type PenType = "pen" | "eraser" | "bucket";
export interface PenData {
  color: `#${string}`;
  size: number;
  type: PenType;
}

export function useSketch(
  canvasRef: RefObject<HTMLCanvasElement>,
  penData: PenData,
  pushHistory: (data: CanvasData) => void,
) {
  const lastPos = useRef<Pos | null>(null);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isPrimaryClicking(e)) return;

      const canvas = canvasRef.current;
      if (canvas === null) return;
      const now = getCanvasData(canvas);
      if (now === null) return;

      pushHistory(now);

      const pos = getIntMousePos(e);

      switch (penData.type) {
        case "pen":
        case "eraser":
          // NOTE: type narrowing がうまくいかないので明示的に指定
          draw(canvas, lastPos.current, pos, {
            ...penData,
            type: penData.type,
          });
          break;
        case "bucket":
          // NOTE: type narrowing がうまくいかないので明示的に指定
          fill(canvas, pos, { ...penData, type: penData.type });
          break;
        default:
          unreachable(penData.type);
      }

      lastPos.current = pos;
    },
    [canvasRef.current, penData, pushHistory],
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isPrimaryClicking(e)) {
        lastPos.current = null;
        return;
      }

      const canvas = canvasRef.current;
      if (canvas === null) return;
      const pos = getIntMousePos(e);

      switch (penData.type) {
        case "pen":
        case "eraser":
          // NOTE: type narrowing がうまくいかないので明示的に指定
          draw(canvas, lastPos.current, pos, {
            ...penData,
            type: penData.type,
          });
          break;
        case "bucket":
          // nop
          break;
        default:
          unreachable(penData.type);
      }

      lastPos.current = pos;
    },
    [canvasRef.current, penData],
  );

  const onMouseUp = useCallback(() => {
    lastPos.current = null;
  }, []);

  const onMouseOut = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (
        isPrimaryClicking(e) &&
        lastPos.current !== null &&
        penData.type !== "bucket"
      ) {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        const pos = getIntMousePos(e);

        draw(canvas, lastPos.current, pos, {
          ...penData,
          type: penData.type,
        });

        console.debug(e.movementX, e.movementY);
      }

      lastPos.current = null;
    },
    [canvasRef.current, penData],
  );

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isPrimaryClicking(e)) return;
      if (penData.type === "bucket") return;

      const canvas = canvasRef.current;
      if (canvas === null) return;
      const now = getCanvasData(canvas);
      if (now === null) return;

      pushHistory(now);

      const pos = getIntMousePos(e);

      // NOTE: 前の座標がわからないため、最寄りの辺からとする
      const sidePos = nearestSidePos(pos, canvas.width, canvas.height);
      if (sidePos !== null) {
        draw(canvas, sidePos, pos, {
          ...penData,
          type: penData.type,
        });
      }

      lastPos.current = pos;
    },
    [pushHistory, canvasRef.current, penData],
  );

  const mouseHandlers = useMemo((): MouseHandlers => {
    return {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseOut,
      onMouseEnter,
    };
  }, [onMouseDown, onMouseMove, onMouseUp, onMouseOut, onMouseEnter]);

  return { mouseHandlers };
}

function getIntMousePos(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();

  return {
    x: Math.round(e.clientX - rect.left),
    y: Math.round(e.clientY - rect.top),
  };
}

function isPrimaryClicking(e: React.MouseEvent<HTMLElement>) {
  return e.buttons === 1;
}

function draw(
  canvas: HTMLCanvasElement,
  lastPos: Pos | null,
  pos: Pos,
  penData: PenData & { type: "pen" | "eraser" },
) {
  const ctx = canvas.getContext("2d");
  if (ctx === null) return;

  ctx.strokeStyle = penData.color;
  ctx.lineWidth = penData.size;
  ctx.lineCap = "round";
  ctx.globalCompositeOperation =
    penData.type === "eraser" ? "destination-out" : "source-over";

  ctx.beginPath();
  if (lastPos === null) {
    ctx.moveTo(pos.x, pos.y);
  } else {
    ctx.moveTo(lastPos.x, lastPos.y);
  }
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function fill(
  canvas: HTMLCanvasElement,
  pos: Pos,
  penData: PenData & { type: "bucket" },
) {
  const ctx = canvas.getContext("2d");
  if (ctx === null) return;

  bucketFill(
    canvas,
    pos.x,
    pos.y,
    penData.color,
    [0, canvas.width],
    [0, canvas.height],
  );
}

function nearestSidePos(pos: Pos, width: number, height: number): Pos | null {
  if (pos.x < 0 || pos.x >= width || pos.y < 0 || pos.y >= height) {
    return null;
  }

  if (Math.min(pos.x, width - pos.x) < Math.min(pos.y, height - pos.y)) {
    return { x: pos.x < width / 2 ? 0 : width, y: pos.y };
  }

  return { x: pos.x, y: pos.y < height / 2 ? 0 : height };
}
