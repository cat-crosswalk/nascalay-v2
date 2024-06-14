import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Artboard } from ".";
import type { PenType } from "./types";
import { useArtboard } from "./useArtboard";

const meta: Meta<typeof ArtboardWithHooks> = {
  title: "features/Artboard",
  component: ArtboardWithHooks,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `\`useArtboard\` と \`Artboard\` を使ったお絵かきキャンバス

通常 \`useRef\` で作成した \`canvasRef\` とペンの設定を \`useArtboard\` に渡し、\`canvasRef\` と \`useArtboard\` で得られた \`mouseHandler\` を \`Artboard\` に渡して使う。

\`useArtboard\` 内の他の返り値を用いて、キャンバスの reset, clear, undo, redo などを実装することができる。`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ArtboardWithHooks>;

export const Primary: Story = {
  args: {
    penType: "pen",
    penSize: 10,
    penColor: "#000000",
    isLocked: false,
  },
  argTypes: {
    penType: {
      options: [
        "pen",
        "eraser",
        "bucket",
      ] as const satisfies readonly PenType[],
      control: {
        type: "radio",
      },
    },
    penSize: {
      control: {
        type: "range",
        min: 1,
        max: 100,
        step: 10,
      },
    },
    penColor: {
      control: {
        type: "color",
        // FIXME: 値はとりあえず適当
        presetColors: [
          "#000000",
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ffff00",
          "#ff00ff",
          "#00ffff",
        ],
      },
    },
    isLocked: {
      control: {
        type: "boolean",
      },
    },
  },
  render: (args) => {
    return <ArtboardWithHooks {...args} />;
  },
};

function ArtboardWithHooks({
  penType,
  penSize,
  penColor,
  isLocked,
}: {
  penType: PenType;
  penSize: number;
  penColor: `#${string}`;
  isLocked: boolean;
}) {
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
      <Artboard
        canvasRef={canvasRef}
        mouseHandlers={mouseHandlers}
        isLocked={isLocked}
      />
    </div>
  );
}
