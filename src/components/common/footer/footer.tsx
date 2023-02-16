import { BsFillCapslockFill } from 'react-icons/bs';
import { handleTopRefProps } from '@/src/constants/types';
import * as S from './style';

const Footer = ({ handleTopRef }: handleTopRefProps) => {
	return (
		<S.FooterLayout>
			<S.IconLayout onClick={handleTopRef}>
				<BsFillCapslockFill />
				<S.FooterText>위로 가기</S.FooterText>
			</S.IconLayout>
		</S.FooterLayout>
	);
};

export default Footer;
