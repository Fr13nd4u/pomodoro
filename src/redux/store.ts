import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import timerReducer, { ITimerState } from "./timerSlice";

export interface RootState {
  timer: ITimerState;
}

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;