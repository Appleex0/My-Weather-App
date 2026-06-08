import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCity } from "../store/weatherSlice";
import type { RootState } from "../store/store";

function Search() {
  const [city, setCity] = useState<string>("");
  const beforeCity = useSelector((state: RootState) => state.weather.city);
  const dispatch = useDispatch();
  const isError = useSelector((state: RootState) => state.weather.isError);
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
          // onClick={() => {
          //   if (isError) {
          //     dispatch(sendCity(beforeCity));
          //     setCity(beforeCity);
          //   }
          //   dispatch(sendCity(city));
          // }}    Düzeldilecek!!!!!!
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Search;
