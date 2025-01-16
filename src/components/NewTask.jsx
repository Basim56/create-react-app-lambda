import Button from "./Button";

const NewTask = () => {
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="bg-cyan-50 focus:outline-double p-3 border-4" />
      <Button>Add Task</Button>
    </div>
  );
};
export default NewTask;
