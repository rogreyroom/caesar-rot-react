import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import alphabetReducer from '../features/alphabet/alphabetSlice'
import rotReducer from '../features/rot/rotSlice'
import cipherReducer from '../features/cipher/cipherSlice'


export const store = configureStore({
  reducer: {
    alphabet: alphabetReducer,
    rot: rotReducer,
    cipher: cipherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
