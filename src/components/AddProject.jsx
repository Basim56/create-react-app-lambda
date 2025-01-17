import Button from "./Button";

const AddProject = ({
  onStartAddProject,
  projects,
  onSelect,
  selectProjectId,
}) => {
  return (
    <div className="bg-[#1da1f2] shadow-slate-500 shadow-lg text-center  p-24 py-30 my-10 rounded-r-lg">
      <p className="uppercase font-semibold text-[30px]">Your Projects</p>
      <Button
        onClick={onStartAddProject}
        className="hover:bg-slate-300 hover:text-slate-700  bg-slate-700 uppercase text-slate-50 p-4 m-4 rounded-[15px] "
      >
        + Add Project
      </Button>
      <ul>
        {projects.map((project) => {
          let cssClassses =
            "w-full text-left px-2 py-1 hover:rounded-[20px] my-1 text-slate-700 hover:bg-slate-700 hover:text-white";
          if (project.id === selectProjectId) {
            cssClassses += "bg-slate-700 text-slate-200 hover:text-slate-700/90 hover:text-slate-200 hover:text-white";
          } else {
            cssClassses += "text-slate-200 hover:text-white";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelect(project.id)}
                className={cssClassses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AddProject;
