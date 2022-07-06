import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliders } from '../config'
import { receive } from '../websocket';

const initialState = {
	sliders: sliders.map(item => ({
		id: item.name,
		value: 0,
		mute: false
	}))
}


const audioSlice = createSlice({
	name: 'audio',
	initialState,
	reducers: {
		setValue(state, action: PayloadAction<{sliderName: string, newVolume: number}>) {
			const { sliderName, newVolume } = action.payload
			const slider = state.sliders.find(s => s.id === sliderName)
			if (slider) slider.value = newVolume
		},
		setMute(state, action: PayloadAction<{sliderName: string, newMute: boolean}>) {
			const { sliderName, newMute } = action.payload
			const slider = state.sliders.find(s => s.id === sliderName)
			if (slider) slider.mute = newMute
		}
	},
	extraReducers: builder =>{
		builder.addCase(receive, (state, action) => {
				const o = JSON.parse(action.payload).Dsp.Faders
				//console.log(o)
				for (const k of Object.keys(o)){
					var slider = state.sliders.find(s => s.id === k)
					if (slider) {
						var tmp = {id: slider.id, value: o[k].Volume, mute: o[k].Muted}
						state.sliders[state.sliders.indexOf(slider)] = tmp
					}
				}
			})
	}
})



export const { setValue } = audioSlice.actions
export default audioSlice.reducer

