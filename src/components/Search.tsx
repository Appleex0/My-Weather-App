import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendCity } from "../store/weatherSlice";

function Search() {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center w-full h-1/7">
      <div className="w-full text-center">
        <input
          type="text"
          placeholder="Şəhər adı girin"
          className="outline-none border px-2 py-1 w-2/7  rounded-lg"
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
        />
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          onClick={() => dispatch(sendCity(city))}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Search;
