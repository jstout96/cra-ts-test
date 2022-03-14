import { createAction, Middleware } from "@reduxjs/toolkit"
import { RootState } from './store'
import { host } from './config'


export const ws = new WebSocket(host)
export const receive = createAction<string>('receive')

export const sendToProcessor: Middleware<{}, RootState> = store => next => action => {
    if (action.type === 'send') {
        ws.send(action.payload)
    }
    else {
        next(action);
    }

}