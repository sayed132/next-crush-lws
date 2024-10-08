"use client";
const ButtonComponent = () => {
  return (
    <div className="mt-5">
      <button
        onClick={() => console.log("click")}
        className="text-white bg-blue-500 hover:bg-blue-700 w-full py-3 px-6 rounded-md"
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonComponent;
