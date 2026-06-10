import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function Info() {
  const [sunriseTime, setSunRiseTime] = useState<string>("");
  const [sunsetTime, setSunSetTime] = useState<string>("");
  const [temperature, setTemperature] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const isLoading = useSelector((state: any) => state.weather.isLoading);
  const city = useSelector((state: any) => state.weather.city);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchWeather(city));
    };
    fetchData();
  }, [dispatch, city]);

  const data = useSelector((state: any) => state.weather.weatherData);

  useEffect(() => {
    if (!data || !data.sys) return;
    const dateSunrise = new Date(data.sys.sunrise * 1000);
    const dateSunset = new Date(data.sys.sunset * 1000);
    setSunRiseTime(
      `${dateSunrise.getHours() < 10 ? "0" + dateSunrise.getHours() : dateSunrise.getHours()}:${dateSunrise.getMinutes() < 10 ? "0" + dateSunrise.getMinutes() : dateSunrise.getMinutes()}`,
    );
    setSunSetTime(
      `${dateSunset.getHours() < 10 ? "0" + dateSunset.getHours() : dateSunset.getHours()}:${dateSunset.getMinutes() < 10 ? "0" + dateSunset.getMinutes() : dateSunset.getMinutes()}`,
    );
    setTemperature(data.main.temp.toFixed());
    setDescription(data.weather[0].description);
    setIcon(data.weather[0].icon);
  }, [data]);

  return (
    <div className="flex h-5/7 w-full">
      <div className="flex items-center justify-between w-full bg-amber-200 px-10">
        <div className="flex h-1/2 gap-4 justify-center items-center w-1/2">
          <img
            className="w-1/3 h-1/2 object-cover"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="text-4xl">
                {isLoading ? <CircularProgress aria-label="Loading…" /> : city}
              </div>
              <div className="text-4xl">
                {isLoading ? (
                  <CircularProgress aria-label="Loading…" />
                ) : (
                  temperature
                )}
              </div>
            </div>
            <div className="text-2xl">
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                description
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-10 w-3/5 h-1/2 text-center items-center">
          <div className="bg-amber-50 text-2xl">
            <div className="">Feels Like</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                data.main.feels_like.toFixed() + " C"
              )}
            </div>
          </div>
          <div className="bg-amber-50 text-2xl">
            <div>Humidity</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                data.main.humidity + "%"
              )}
            </div>
          </div>
          <div className="bg-amber-50 text-2xl">
            <div className="text-now">Wind Speed</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                data.wind.speed + " km/h"
              )}
            </div>
          </div>
          <div className="bg-amber-50 text-2xl">
            <div>Pressure</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                data.main.pressure
              )}
            </div>
          </div>
          <div className="bg-amber-50 text-2xl">
            <div>Sunset</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                sunriseTime
              )}
            </div>
          </div>
          <div className="bg-amber-50 text-2xl">
            <div>Sunrise</div>
            <div>
              {isLoading ? (
                <CircularProgress aria-label="Loading…" />
              ) : (
                sunsetTime
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
