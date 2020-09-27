import styled from 'styled-components'

const Select = styled.select`
  -webkit-appearance: none;
	appearance: none;
	display: block;
	padding: 0;
	margin: 0;
	border: 0;
	border-radius: 0;
	border-bottom: 2px solid var(--accent-color);
	background: transparent;
	width: 100%;
	font-size: 1rem;
	min-width: 40px;

	&:focus {
		outline: solid var(--accent-focus-color);
	}
`

export default Select