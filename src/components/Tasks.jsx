import NewTask from "./NewTask";

const Tasks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-slate-800 mb-4">
        This project doesn't have any tasks yet.{" "}
      </p>
      <ul>
        <li></li>
      </ul>
    </section>
  );
};

// Correct export
export default Tasks;
