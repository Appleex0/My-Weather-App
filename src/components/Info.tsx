import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

function Info() {
  const data = useSelector((state: any) => state.weather.weatherData);
  const isLoading = useSelector((state: any) => state.weather.isLoading);
  const city = useSelector((state: any) => state.weather.city);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);
  return (
    <div className="flex h-5/7 w-full">
      <div className="flex items-center justify-between w-full bg-amber-200 px-30">
        <div className="flex h-1/2 gap-4">
          <div className="text-4xl">{city}</div>
          <div className="text-4xl">23 C</div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-30 w-1/2 text-center">
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
          <div className="bg-amber-50 text-2xl">
            {isLoading ? (
              <CircularProgress aria-label="Loading…" />
            ) : (
              data.wind.speed
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
