import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sendToProcessor } from './websocket';
import audioReducer from './slices/AudioSlice'
import videoReducer from './slices/VideoSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({ 
  audio: audioReducer,
  video: videoReducer
});

const store = configureStore({
  reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(sendToProcessor)
  
});


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch