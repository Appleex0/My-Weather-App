import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const apiKey = import.meta.env.VITE_API_KEY;

const getAll = async () => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/3.0/weather?q=${}&appid=${apiKey}&units=metric`,
    );
  } catch (err) {
    console.log("Data Error: ", err)
  }
};

export const counterSlice = createSlice({
  name: "getApi",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
