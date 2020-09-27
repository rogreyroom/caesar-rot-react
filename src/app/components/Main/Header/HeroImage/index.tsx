import styled from 'styled-components'
import caesar from './julius-caesar.png'

const HeroImage = styled.div`
	background: url(${caesar});
	background-position: top;
	width: 100%;
	height: 100vh;
	z-index: -1;
	display: none;

	@media (min-width: 736px) {
		display: block;
	}
`

export default HeroImage