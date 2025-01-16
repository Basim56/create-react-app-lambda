import { useState } from "react";
import Button from "./Button";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState(""); // Initialize as an empty string

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask(""); // Reset the input to an empty string after adding task
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask} // Always a string
        type="text"
        className="bg-cyan-50 focus:outline-double p-3 border-4"
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
};

export default NewTask;
