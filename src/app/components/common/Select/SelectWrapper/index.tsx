import styled from 'styled-components'

const SelectWrapper = styled.div`
		position: relative;
		width: 40px;

		&::after {
			content: "▼";
			font-size: .8rem;
			top: 10%;
			right: 6px;
			position: absolute;
			color: var(--accent-color);
			z-index: -1;
		}
`

export default SelectWrapper