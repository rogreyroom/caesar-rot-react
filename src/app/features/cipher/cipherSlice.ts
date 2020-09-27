import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { convertToString, isAlphanumeric, isEmpty, isUpperCase, shiftIndexValue } from '../util/helprs'

interface CipherState {
  inputValue: string | number;
  outputValue: string
}

const initialState: CipherState = {
  inputValue: '',
  outputValue: ''
};

export const cipherSlice = createSlice({
  name: 'cipher',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<{value: string, key: string}>) => {
      const { key, value } = action.payload
      state.inputValue = value
    },
    clear: (state) => {
      state.inputValue = '';
      state.outputValue = '';
    },
    cipher: (state, action: PayloadAction<{input: string | number, rot: number, alphabet: string[]}>) => {
      const { input, rot, alphabet } = action.payload
      const inputString: string = convertToString(input)
      const inputArray: string[] = [...inputString]
      let cipheredString: string = ''

      if (isEmpty(inputString)) throw new Error('Given string is empty!')

      inputArray.forEach((char) => {
        if (!isAlphanumeric(char)) return (cipheredString = cipheredString.concat(char))

        const valueIndex: number = alphabet.indexOf(char.toLowerCase())
        const newValueIndex: number = shiftIndexValue(valueIndex, rot, alphabet.length)
        const newChar: string = alphabet[newValueIndex]

        cipheredString = isUpperCase(char)
        ? cipheredString.concat(newChar.toUpperCase())
        : cipheredString.concat(newChar)
      })

      state.outputValue = cipheredString
    }
  }
})

export const { clear, set, cipher } = cipherSlice.actions;

export const selectInput = (state: RootState) => state.cipher.inputValue
export const selectOutput = (state: RootState) => state.cipher.outputValue

export default cipherSlice.reducer