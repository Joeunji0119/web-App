import styled from 'styled-components';

export const NavLayout = styled.nav`
	${({ theme }) => theme.variables.flex('row', ' flex-start', 'center')};
	${({ theme }) => theme.variables.position('sticky', '0', '', '', '')};
	height: 6%;
	background: ${({ theme }) => theme.style.pink1};
	z-index: 30;
	overflow-x: auto;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Catagory = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	min-width: 20vw;
	font-size: 17px;
	font-weight: 800;
	color: ${({ buttonStyle }: { buttonStyle: boolean }) =>
		buttonStyle ? 'white' : 'black'};
	cursor: pointer;
`;
