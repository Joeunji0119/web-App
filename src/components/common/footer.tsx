import styled from 'styled-components';
import { BsFillCapslockFill } from 'react-icons/bs';

const Footer = () => {
	return (
		<FooterLayout>
			<IconLayout>
				<BsFillCapslockFill />
			</IconLayout>
		</FooterLayout>
	);
};

export default Footer;

const FooterLayout = styled.footer`
	${({ theme }) => theme.variables.position('absolute', '', '', '0')};
	${({ theme }) => theme.variables.flex('column', 'center', 'center')};
	width: 100%;
	height: 7%;
	background: ${({ theme }) => theme.style.grey2};
`;

const IconLayout = styled.div`
	font-size: 120%;
`;