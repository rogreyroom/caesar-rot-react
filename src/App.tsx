import React from 'react';
import styled from 'styled-components'
import Main from './app/components/Main';
import BottomSvg from './app/components/BottomSvg'

const App = () => {
  return (
    <AppBody>
      <Main/>
      <BottomSvg/>
    </AppBody>
  )
}

const AppBody = styled.div`
background: var(--bg-gradient);
	min-height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
  overflow: hidden;
  position: relative;
  z-index: 1;
`

export default App
