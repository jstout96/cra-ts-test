import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export default function createSliderSlice(sliceName: string, ws: WebSocket, min: number, max: number) {

	const updateVolume = createAsyncThunk(`${sliceName}/updateVolume`, (v: number) => {
	    ws.send(`${sliceName}~Set~${v}`); 
	});

	const slice = createSlice({
		name: sliceName,
        initialState: {
            value: 0,
			mute: false
        },
		reducers: {
			increment: (state) => {
				if (state.value < max - 10)  state.value += 10;
                else if (state.value < max) state.value = max;
				console.log("increment" + state.value);
			},
			decrement: (state) => {
				state.value -= 10;
				if (state.value > min + 10)  state.value -= 10;
                    else if (state.value > min) state.value = min;
			},
			set: (state, action) => {
				state.value = action.payload;
			},
			toggleMute: (state) => {
				state.mute = !state.mute;
			}
	    },
	    extraReducers: {
	    }
	})


	return {
		updateVolume, slice, reducer: slice.reducer, actions: slice.actions,
	}
}

