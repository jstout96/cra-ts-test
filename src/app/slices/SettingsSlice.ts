import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { displays } from '../config'
import { receive } from '../websocket';

const initialState = {
    displays: displays.map(display => ({
        id: display.name,
        actions: display.actions,
        state: display.state
    }))
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setPower(state, action: PayloadAction<{displayName:string, newPower:boolean}>){
            const {displayName, newPower}= action.payload;
            const display = state.displays.find(s => s.id === displayName);
            if (display) display.state.on = newPower;
        },
        setInput(state, action: PayloadAction<{displayName:string, newInput:string}>){
            const {displayName, newInput}= action.payload;
            const display = state.displays.find(s => s.id === displayName);
            if (display) display.state.input = newInput;
        }
    },
    extraReducers: builder => {
        builder.addCase(receive, (state, action) => {
            //TODO: display state feedback
        })
    }
})

export const { setPower, setInput } = settingsSlice.actions
export default settingsSlice.reducer