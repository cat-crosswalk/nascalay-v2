import { border, colors, rounded, shadow, typography } from "@/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useId, useRef, useState } from "react";
import {
  Button,
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
  type PressEvent,
} from "react-aria-components";
import { MdClear, MdOutlineQuestionMark } from "react-icons/md";

const MotionButton = motion(Button);
const MotionModal = motion(Modal);
const MotionModalOverlay = motion(ModalOverlay);
const MotionDialog = motion(Dialog);

export function HelpModal() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const openModal = useCallback((_e: PressEvent) => {
    if (triggerRef.current === null) return;

    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const id = useId();
  const titleId = `${id}-title`;
  const buttonId = `${id}-button`;

  return (
    <>
      <AMotionButton ref={triggerRef} layoutId={id} onPress={openModal}>
        <ButtonText layoutId={titleId}>遊び方</ButtonText>
        <IconDiv layoutId={buttonId}>
          <MdOutlineQuestionMark size={24} />
        </IconDiv>
      </AMotionButton>

      <AnimatePresence>
        {isOpen && (
          <AMotionModalOverlay isDismissable isOpen onOpenChange={setIsOpen}>
            <AMotionModal>
              <ADialog
                layoutId={id}
                transition={{
                  duration: 0.3,
                }}
              >
                <AHeader layout>
                  <AHeading layoutId={titleId}>遊び方</AHeading>
                  <IconButton layoutId={buttonId} onPress={close}>
                    <MdClear size={24} />
                  </IconButton>
                </AHeader>
              </ADialog>
            </AMotionModal>
          </AMotionModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

const AMotionButton = styled(MotionButton)`
  ${border.default}
  ${rounded.default}
  ${shadow.default}

  background: ${colors.background.primary.default};
  color: ${colors.text.primary.default};

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.5rem;
  padding: calc(0.75rem - 2px);
  padding-left: calc(1rem - 2px);
`;

const ButtonText = styled(motion.span)`
  ${typography.heading4};

  display: block;
  font-family: 'Kiwi Maru', serif;
`;

const iconButtonStyle = css`
  ${border.default}
  ${rounded.default}

  background: ${colors.chromatic.yellow.default};
  color: ${colors.text.primary.default};

  display: grid;
  place-items: center;

  padding: calc(0.5rem - 2px);
`;

const IconDiv = styled(motion.div)`
  ${iconButtonStyle}
`;

const IconButton = styled(motion(Button))`
  ${iconButtonStyle}
`;

const AMotionModalOverlay = styled(MotionModalOverlay)`
  position: fixed;
  inset: 0;
  z-index: 10;
`;

const AMotionModal = styled(MotionModal)`
`;

const ADialog = styled(MotionDialog)`
  ${border.default}
  ${shadow.default}
  ${rounded.default}

  background: ${colors.background.primary.default};

  position: fixed;
  inset: 2rem;

  padding: 0%.5 1rem;
`;

const AHeader = styled(motion.div)`
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  width: calc(100% - (1rem + 0.75rem));

  padding: 0.75rem;
  padding-left: 1rem;
`;

const AHeading = styled(motion(Heading))`
  ${typography.heading2};

  margin: 0;
  margin-right: auto;
  font-family: 'Kiwi Maru', serif;
`;
