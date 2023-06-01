import { createSlice } from "@reduxjs/toolkit";

export interface ITimerState {
  isLight: boolean;
  focusInterval: number;
  shortBreakInterval: number;
  longBreakInterval: number;
  notification: boolean;
  time: number;
}

const initialState: ITimerState = {
  isLight: true,
  focusInterval: 25,
  shortBreakInterval: 5,
  longBreakInterval: 15,
  notification: false,
  time: 25
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.isLight = action.payload;
    },
    setFocusInterval: (state, action) => {
      state.focusInterval = action.payload;
    },
    setShortBreakInterval: (state, action) => {
      state.shortBreakInterval = action.payload;
    },
    setLongBreakInterval: (state, action) => {
      state.longBreakInterval = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    }
  }
})

export const {
  setMode,
  setFocusInterval,
  setShortBreakInterval,
  setLongBreakInterval,
  setNotification,
  setTime
} = timerSlice.actions;

export default timerSlice.reducer;