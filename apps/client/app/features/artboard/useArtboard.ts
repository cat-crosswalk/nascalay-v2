import type React from "react";
import { type RefObject, useCallback, useRef } from "react";
import type { MouseHandlers, Pos } from "./types";
import { useHistory } from "./useHistory";
import { type PenData, useSketch } from "./useSketch";
import { type CanvasData, applyCanvasData, getCanvasData } from "./utils";

interface Handler {
  clear(): void;
  undo(): void;
  redo(): void;
  resetCanvas(): void;
  shortcut(e: React.KeyboardEvent): void;
  exportDataURL(): string;
  canRedo: boolean;
  canUndo: boolean;
  mouseHandlers: MouseHandlers;
}

interface State {
  lastPos: Pos | null;
}
const createInitialState = (): State => ({
  lastPos: null,
});

export function useArtboard(
  canvasRef: RefObject<HTMLCanvasElement>,
  penData: PenData,
): Handler {
  // NOTE: initial state が重くなる場合は https://ja.react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents のようにする
  const state = useRef<State>(createInitialState());
  const {
    canRedo,
    canUndo,
    clearHistory,
    pushHistory,
    undoHistory,
    redoHistory,
  } = useHistory<CanvasData>();
  const { mouseHandlers } = useSketch(canvasRef, penData, pushHistory);

  const resetCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    state.current = createInitialState();

    clearHistory();
  }, [canvasRef.current, clearHistory]);

  const saveCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const savedData = getCanvasData(canvas);
    if (savedData === null) return;

    pushHistory(savedData);
  }, [canvasRef.current, pushHistory]);

  const undo = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const now = getCanvasData(canvas);
    if (now === null) return;

    const next = undoHistory(now);
    if (next === null) return;

    applyCanvasData(canvas, next);
  }, [canvasRef.current, undoHistory]);

  const redo = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const now = getCanvasData(canvas);
    if (now === null) return;

    const next = redoHistory(now);
    if (next === undefined) return;

    applyCanvasData(canvas, next);
  }, [canvasRef.current, redoHistory]);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    saveCanvas();

    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [canvasRef.current, saveCanvas]);

  const shortcut = useCallback(
    (e: React.KeyboardEvent) => {
      // NOTE: shift を押した状態だと e.key が大文字になるので小文字に変換してから比較する
      if (e.key.toLocaleLowerCase() === "z" && (e.ctrlKey || e.metaKey)) {
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    },
    [redo, undo],
  );

  const exportDataURL = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return "";

    return canvas.toDataURL();
  }, [canvasRef.current]);

  return {
    clear,
    undo,
    redo,
    resetCanvas,
    shortcut,
    exportDataURL,
    canRedo,
    canUndo,
    mouseHandlers,
  };
}
