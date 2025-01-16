const AddData = ({ isTextArea = false, title, ...props }) => {
  return (
    <p className="flex flex-col w-[800px] ">
      <label className="uppercase font-bold text-cyan-600">{title}</label>
      {isTextArea ? (
        <textarea className="bg-cyan-100  focus:outline-none p-5" {...props} />
      ) : (
        <input {...props} className="bg-cyan-100 focus:outline-none p-5" />
      )}
    </p>
  );
};
export default AddData;
