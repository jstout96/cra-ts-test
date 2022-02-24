import { configureStore } from '@reduxjs/toolkit';
import { sliders, min, max } from './config'
import createSliderSlice from '../components/VolumeSliderSlice'

var ws = new WebSocket("ws://192.168.1.99:54321/Data");
var slidersByName: { [s: string]: any } = {};
var reducers: { [s: string]: any } = {};
export const slices: { [s: string]: any } = sliders.map((v) => v.name).reduce((prev, curr) => ({ ...prev, [curr]: createSliderSlice(curr, ws, min, max)}), {})

Object.entries(slices).forEach(
  ([key, value]) => {
    slidersByName[key] = value.actions;
    reducers[key] = value.reducer;
    console.log({key, value})
  }
);



export const increment = (sliderName: string) =>
	slidersByName[sliderName].actions.increment;
export const decrement = (sliderName: string) =>
	slidersByName[sliderName].actions.decrement;
export const incrementByAmount = (sliderName: string) =>
	slidersByName[sliderName].actions.incrementByAmount;

export default configureStore({
    reducer: {
      ...reducers
    },
  });