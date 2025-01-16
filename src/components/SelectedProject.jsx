import Tasks from "./Tasks";


const SelectedProject = ({ project, onDelete }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className="w-[35rem] mt-16 ml-6">
      <header children className="pb-4 mb-4 border-b-2 border-slate-700 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-600 mb-2'">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-slate-700 hover:text-slate-400"
          >
            Delete
          </button>
        </div>
      </header>
      <p className="mb-4 text-slate-500">{formattedDate}</p>
      <p className="border-t-4 whitespace-pre-wrap">{project.description}</p>

      <Tasks />
    </div>
  );
};
export default SelectedProject;
