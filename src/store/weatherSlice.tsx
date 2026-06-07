import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface cityState {
  city: string;
  weatherData: string;
  isLoading: boolean;
  IsError: boolean;
}

const initialState: cityState = {
  city: "Baku",
  weatherData: "",
  isLoading: true,
  IsError: false,
};

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityName: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Data Error: ", err);
    }
  },
);

export const weatherSlice = createSlice({
  name: "getApi",
  initialState,
  reducers: {
    sendCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        if (action.payload.cod === "404") {
          state.weatherData = "";
        } else {
          state.weatherData = action.payload;
        }

        state.isLoading = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
        state.IsError = true;
      });
  },
});

export const { sendCity } = weatherSlice.actions;

export default weatherSlice.reducer;
