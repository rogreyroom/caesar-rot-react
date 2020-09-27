import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface RotState {
  value: number;
}

const initialState: RotState = {
  value: 13,
};


export const rotSlice = createSlice({
  name: 'rot',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
})

export const { change } = rotSlice.actions;

export const selectRot = (state: RootState) => state.rot.value

export default rotSlice.reducer