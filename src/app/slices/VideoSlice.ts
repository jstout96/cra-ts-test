import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { inputs, outputs, types } from '../config'
import { receive } from '../websocket';

var i = 1;
const initialState = {
    routes: outputs.map(item => ({
        source: '',
        destination: item.key,
        type: '',
        id: i++
    }))
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        makeRoute(state, action: PayloadAction<{source: string, destination: string, type: string}>) {
            const {source, destination, type} = action.payload
            const d = state.routes.find(s => s.destination === destination)
            if (d) {
                d.source = source
                d.type = type
            }
        }
    },
	extraReducers: builder =>{
		builder.addCase(receive, (state, action) => {
				const o = JSON.parse(action.payload).Switcher.OutputRoutes
				console.log(o)
				for (const k of Object.keys(o)){
					var r = state.routes.find(s => s.destination === k)
					if (r) {
						r.source = o[k]
						r.destination = k
					}
				}
			})
	}
})

export const { makeRoute } = videoSlice.actions
export default videoSlice.reducer