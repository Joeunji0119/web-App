import { BsFillCapslockFill } from 'react-icons/bs';
import * as S from './style';

const Footer = ({ handleTopRef }) => {
	return (
		<S.FooterLayout>
			<S.IconLayout onClick={handleTopRef}>
				<BsFillCapslockFill />
			</S.IconLayout>
		</S.FooterLayout>
	);
};

export default Footer;
