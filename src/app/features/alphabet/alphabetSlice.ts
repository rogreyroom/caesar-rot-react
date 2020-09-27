import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { generateAlphabet } from '../util/generateAlphabet'

interface AlphabetState {
  alphabet: string[]
}

const initialState: AlphabetState = {
  alphabet: generateAlphabet()
};

export const alphabetSlice = createSlice({
  name: 'alphabet',
  initialState,
  reducers: {}
})


export const selectAlphabet = (state: RootState) => state.alphabet.alphabet

export default alphabetSlice.reducer