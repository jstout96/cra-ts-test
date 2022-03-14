import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliders } from '../app/config'
import { receive } from '../app/websocket';

const initialState = {
	sliders: sliders.map(item => ({
		id: item.name,
		value: 0,
		mute: false
	})),
	status: 'idle',
	error: null
}


const sliderSlice = createSlice({
	name: 'slider',
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
				const o = JSON.parse(action.payload).Faders
				console.log(o)
				for (const k of Object.keys(o)){
					var slider = state.sliders.find(s => s.id === k)
					if (slider) {
						slider.value = o[k].Level
						slider.mute = o[k].Mute
					}
				}
			})
	}
})



export const { setValue } = sliderSlice.actions
export default sliderSlice.reducer

