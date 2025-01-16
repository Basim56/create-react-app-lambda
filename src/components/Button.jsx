const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="hover:bg-slate-300 hover:text-slate-700  bg-slate-700 uppercase text-slate-50 p-4 mt-4 mb-4 ml-4 rounded-[15px] "
    >
      {children}
    </button>
  );
};
export default Button;
