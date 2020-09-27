import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  set,
  clear,
  cipher
} from './cipherSlice';
import { selectAlphabet } from '../alphabet/alphabetSlice'
import { selectRot } from '../rot/rotSlice'
import Input from '../../components/common/Input'

const InputText = () => {
  const dispatch = useDispatch();
  const alphabetArray = useSelector(selectAlphabet)
  const rotValue = useSelector(selectRot)

  return (
    <Input
      onKeyPress={( e ) => {
        const eventData = {
          value: e.currentTarget.value,
          key: e.key
        }
        if (e.key === 'Enter') {
          dispatch(set(eventData))
          dispatch(cipher({input: eventData.value, rot: rotValue, alphabet: alphabetArray}))
        }
      }}
      onClick={( e ) => {
        e.currentTarget.value = ''
        dispatch(clear())
      }}
      onBlur={(e) => {
        const eventData = {
          value: e.currentTarget.value,
          key: ''
        }
        dispatch(set(eventData))
        dispatch(cipher({input: eventData.value, rot: rotValue, alphabet: alphabetArray}))
      }
      }
    />
  )
}

export default InputText