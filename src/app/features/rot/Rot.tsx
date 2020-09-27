import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  change,
  selectRot
} from './rotSlice';
import SelectWrapper from '../../components/common/Select/SelectWrapper'
import Select from '../../components/common/Select'
import Option from '../../components/common/Select/Option'

const optionArray: number[] =  [...Array(14).keys()]

const RotSelect = () => {
  const rot = useSelector(selectRot);
  const dispatch = useDispatch();
  const optionList = optionArray.map(option => {
    return <Option value={option} key={option}>{option}</Option>
  })

  return (
      <SelectWrapper>
        <Select
          value = { rot }
          onChange={({target}) => {
            const selectedOptionValue:number = +target.options[target.selectedIndex].value
            dispatch(change(selectedOptionValue))
          }
        }>
          {optionList}
        </Select>
      </SelectWrapper>
  )
}

export default RotSelect