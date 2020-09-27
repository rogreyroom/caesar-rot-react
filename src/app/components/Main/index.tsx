import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Inputs from './Inputs'
import Output from './Output'

const Main = () => {
  return (
    <StyledMain>
      <Header/>
      <Inputs/>
      <Output/>
    </StyledMain>
  )
}

const StyledMain = styled.main`
display: grid;
	grid-template-areas: "header input" "header output" "header .";
	grid-template-columns: 0 4fr;
	grid-template-rows: 2fr 2fr 10fr;
	width: 100%;

	@media (min-width: 736px) {
		grid-template-columns: 2fr 4fr;
	}
`

export default Main