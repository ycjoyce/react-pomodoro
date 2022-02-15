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

const Modal: FC<ModalProps> = ({
  root = "modal-root",
  children,
  onClose = () => {},
}) => {
  //   const modalRoot = useRef(document.getElementById(root));
  //   const el = useRef(document.createElement("div"));
  //
  //   useEffect(() => {
  //     const rootElement = modalRoot.current;
  //     const element = el.current;
  //     rootElement?.appendChild(element);
  //
  //     return () => {
  //       rootElement?.removeChild(element);
  //     };
  //   }, []);

  const handleClickOutside = () => {
    onClose();
  };

  // return createPortal(
  //   <StyledModal>
  //     <StyledModalBackground onClick={handleClickOutside}>
  //       <StyledModalContent>{children}</StyledModalContent>
  //     </StyledModalBackground>
  //   </StyledModal>,
  //   el.current
  // );
  return (
    <StyledModal>
      <StyledModalBackground onClick={handleClickOutside} />
      <StyledModalContent>{children}</StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
