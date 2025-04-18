'use client';
import { configureStore } from '@reduxjs/toolkit';
import trialReducer from './slices/trialSlice';

export const store = configureStore({
  reducer: {
    trial: trialReducer,
  },
});
