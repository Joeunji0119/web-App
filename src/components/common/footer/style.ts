import styled from 'styled-components';

export const FooterLayout = styled.footer`
	${({ theme }) => theme.variables.position('fixed', '', '', '0')};
	${({ theme }) => theme.variables.flex('column', 'center', 'center')};
	width: 100%;
	height: 7%;
	background: ${({ theme }) => theme.style.grey2};
`;

export const IconLayout = styled.div`
	font-size: 120%;
`;
