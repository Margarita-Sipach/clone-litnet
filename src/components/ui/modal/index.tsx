import { ReactNode } from "react";
import { CloseButton } from "../close-button";

interface ModalProps {
  children: ReactNode;
  displayModal: (param: boolean) => void;
}

export const Modal = ({ children, displayModal }: ModalProps) => {
  return (
    <div
      className="flex w-screen h-screen absolute z-20 top-0 left-0 bg-black bg-opacity-50 justify-center items-center"
      onClick={() => displayModal(false)}
    >
      <div
        className="bg-white flex items-center justify-center py-10 px-8 w-screen h-screen absolute top-0 left-0 sm:w-auto sm:min-w-[400px] sm:h-auto sm:relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={() => displayModal(false)} />
        {children}
      </div>
    </div>
  );
};
