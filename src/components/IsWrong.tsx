import { useDispatch } from "react-redux";
import { clearError } from "../store/weatherSlice";

function IsWrong() {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(clearError());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen absolute top-0 left-0 w-full backdrop-blur-sm z-50">
      <div className="text-2xl font-bold text-red-500">City not found!</div>
      <button
        onClick={() => {
          close();
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
}

export default IsWrong;
