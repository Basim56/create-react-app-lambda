import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    close() {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-slate-700/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button className="content-center">Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
