import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 4,
};

export const trialSlice = createSlice({
  name: 'trial',
  initialState,
  reducers: {
    setTrial: (state, action) => {
      state.value = action.payload;
    },
    decrementTrial: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    addTrials: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setTrial, decrementTrial, addTrials } = trialSlice.actions;
export const useTrialState = (state) => state.trial.value;
export default trialSlice.reducer;
