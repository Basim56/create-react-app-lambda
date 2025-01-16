import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
const NoData = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="object-cover w-16 h-16 mx-auto grayscale"
      />
      <h2 className="text-xl font-bold text-slate-700 mt-4">
        No Project Selected
      </h2>
      <p className="text-slate-700 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};
export default NoData;
