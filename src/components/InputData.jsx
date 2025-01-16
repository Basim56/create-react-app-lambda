import { useRef } from "react";
import AddData from "./AddData";
import Modal from "./Modal";

const InputData = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();
  const isValidationCheck = false;
  function handleValidation() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTitle, enteredDescription, enteredDueDate);
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-slate-700">Invalid Input</h2>
        <p className="text-slate-700 mb-4 text-sm">
          Oops ... looks like you forgot to enter a value.
        </p>
      </Modal>
      <div className="p-24 py-30 my-12 ">
        <div className="flex justify-end ">
          <button className="hover:text-red-400 mx-10" onClick={onCancel}>
            Cancel
          </button>
          <button
            onClick={handleValidation}
            className=" bg-[#1da1f2] p-1 px-10 rounded-lg text-slate-50 shadow-lg"
          >
            Save
          </button>
        </div>

        <AddData ref={titleRef} title={"Title"} type="text" />
        <AddData ref={descriptionRef} isTextArea title={"Description"} />
        <AddData ref={dueDateRef} title={"DueDate"} type="date" />
      </div>
    </>
  );
};
export default InputData;
