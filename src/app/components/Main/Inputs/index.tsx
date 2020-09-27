import React from 'react'
import styled from 'styled-components'
import RotSelect from '../../../features/rot/Rot'
import InputText from '../../../features/cipher/Cipher'

const Inputs = () => {
  return (
    <InputsWrapper>
      <InputText/>
      <RotSelect/>
    </InputsWrapper>
  )
}

const InputsWrapper = styled.section`
  align-self: end;
	justify-self: center;
	grid-area: input;
	display: flex;
	margin: .5rem 1rem;
  min-width: 252px;
`

export default Inputs