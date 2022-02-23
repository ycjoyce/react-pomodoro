import React, { FC, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import StyledModal, {
  StyledModalContent,
  StyledModalBackground,
} from "./Modal.style";

export interface ModalProps {
  root?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ root, children, onClose = () => {} }) => {
  const modalRoot = useRef(document.getElementById(root || "modal-root"));
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const rootElement = modalRoot.current;

    if (!rootElement) {
      return;
    }

    const element = el.current;
    rootElement.appendChild(element);

    return () => {
      rootElement?.removeChild(element);
    };
  }, []);

  const handleClickOutside = () => {
    onClose();
  };

  const modalComponent = (
    <StyledModal>
      <StyledModalBackground onClick={handleClickOutside} />
      <StyledModalContent>{children}</StyledModalContent>
    </StyledModal>
  );

  if (root) {
    return createPortal(modalComponent, el.current);
  }

  return modalComponent;
};

export default Modal;
