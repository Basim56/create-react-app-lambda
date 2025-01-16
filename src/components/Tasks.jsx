import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks.length === 0 ? (
        <p className="text-slate-800 mb-4">
          This project doesn't have any tasks yet.{" "}
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex my-4 justify-between">
              <span>{task.text}</span> {/* Use task.text */}
              <button className="text-slate-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      <ul>
        <li></li>
      </ul>
    </section>
  );
};

// Correct export
export default Tasks;
