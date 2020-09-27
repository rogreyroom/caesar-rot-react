import React from 'react'
import styled from 'styled-components'
import P from '../../common/P'
import { useSelector } from 'react-redux';
import { selectOutput } from '../../../features/cipher/cipherSlice'

const Output = () => {
  const cipheredString = useSelector(selectOutput)
  return (
    <OutputWrapper>
      <P>
        {cipheredString}
      </P>
    </OutputWrapper>
  )
}

const OutputWrapper = styled.section`
  align-self: end;
	justify-self: center;
	grid-area: output;
	display: flex;
	margin: .5rem 1rem;
	min-width: 252px;
	background: transparent;
`

export default Output