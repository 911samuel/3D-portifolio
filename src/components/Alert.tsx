interface Alert {
  text: string;
  type: "danger" | "warning" | "info" | "success";
}

const Alert = ({ type, text }: Alert) => {
  return (
    <div className="absolute top-10 right-0 left-0 flex justify-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p className={`${type === "danger" ? "bg-red-500" : "bg-blue-800"} flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}>
          {type === "danger" ? "Failed" : "success"}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
