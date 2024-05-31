import { Artboard } from "@/features/artboard";
import type { PenType } from "@/features/artboard/types";
import { useArtboard } from "@/features/artboard/useArtboard";
import { useRef, useState } from "react";

export default function Tmp2() {
  const [penType, setPenType] = useState<PenType>("pen");
  const [penSize, setPenSize] = useState(1);
  const [penColor, setPenColor] = useState<`#${string}`>("#000000");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    canRedo,
    canUndo,
    clear,
    redo,
    resetCanvas,
    shortcut,
    undo,
    mouseHandlers,
  } = useArtboard(canvasRef, {
    color: penColor,
    size: penSize,
    type: penType,
  });

  return (
    <div onKeyDown={shortcut}>
      <div>
        <button type="button" onClick={resetCanvas}>
          Reset
        </button>
        <button type="button" onClick={clear}>
          Clear
        </button>
        <button type="button" onClick={undo} disabled={!canUndo}>
          Undo
        </button>
        <button type="button" onClick={redo} disabled={!canRedo}>
          Redo
        </button>
      </div>
      <div>
        <input
          type="text"
          value={penColor}
          onChange={(e) => setPenColor(e.target.value as `#${string}`)}
        />
        <input
          type="number"
          value={penSize}
          onChange={(e) => setPenSize(Number(e.target.value))}
        />
        <label>
          <input
            type="radio"
            name="tool"
            value="pen"
            checked={penType === "pen"}
            onChange={() => setPenType("pen")}
          />
          pen
        </label>
        <label>
          <input
            type="radio"
            name="tool"
            value="eraser"
            checked={penType === "eraser"}
            onChange={() => setPenType("eraser")}
          />
          eraser
        </label>
        <label>
          <input
            type="radio"
            name="tool"
            value="bucket"
            checked={penType === "bucket"}
            onChange={() => setPenType("bucket")}
          />
          bucket
        </label>
      </div>
      <Artboard canvasRef={canvasRef} mouseHandlers={mouseHandlers} />
    </div>
  );
}
