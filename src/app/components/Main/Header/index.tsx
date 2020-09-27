import React from 'react'
import styled from 'styled-components'
import HeroImage from './HeroImage'
import H1 from './H1'

const Header = () => {
  return (
    <StyledHeader>
      <HeroImage/>
      <H1/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  grid-area: header;
	display: flex;
	align-items: center;
`

export default Header