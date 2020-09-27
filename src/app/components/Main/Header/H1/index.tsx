import React from 'react'
import styled from 'styled-components'

const H1 = () => {
  return (
    <Title>
      <FirstWord>CAESAR</FirstWord>
      <SecondWord>OT</SecondWord>
    </Title>
  )
}

const Title = styled.h1`
  display: grid;
		grid-template-columns: 16px auto;
		grid-template-areas: "first second";
		color: var(--header-text-color);
		font-family: map-get($fonts, ff-header);
		font-size: 10vh;
		margin: 0;
`

const FirstWord = styled.span`
  grid-area: first;
		width: 0;
		word-wrap: break-word;
`

const SecondWord = styled.span`
grid-area: second;
		word-wrap: normal;
		letter-spacing: calc(10vh / 2);
		margin-left: calc(10vh - 8px);
		width: 0;
		align-self: end;
`

export default H1