import {
	DisplayNoneProps,
	IsLastActiveIndexProps,
} from '@/src/constants/types';
import styled from 'styled-components';

/*bannerContainer 컴포넌트 스타일 */

export const BannerContainerLayout = styled.div`
	${({ theme }) => theme.variables.flex('column', 'center', 'center')};
	width: 100vw;
	min-height: 28vh;
`;

export const BannersLayout = styled.div`
	${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')}
	overflow: hidden;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	width: 100%;
	min-height: 24vh;
`;

export const Banners = styled.div<IsLastActiveIndexProps>`
	display: flex;
	width: 100vw;
	z-index: 3;
	transition: ${({ isLastActiveIndex }) =>
		isLastActiveIndex ? 'none' : 'all ease-in 0.7s .0s'};
`;

/*banner 컴포넌트 스타일 */

export const BannerLayout = styled.div`
	min-width: 80vw;
	max-height: 50%;
	height: 60%;
	margin: 3%;
	border-radius: 20px;
	box-shadow: 1px 2px 3px ${({ theme }) => theme.style.grey3};
`;

export const BannerTextAria = styled.div`
	${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
	min-height: 50px;
	padding: 0 10px;
`;

export const BannerImage = styled.img`
	width: 100%;
	height: 60%;
	border-radius: 20px 20px 0 0;
	object-fit: cover;
`;

export const BannerTitle = styled.div`
	${({ theme }) => theme.variables.flex('', 'flex-start', 'center')}
	width: 100%;
	font-size: 12px;
	font-weight: 800;
`;

export const BannerDate = styled.div`
	${({ theme }) => theme.variables.flex('', 'flex-end', 'center')}
	width: 100%;
	font-size: 4px;
	color: ${({ theme }) => theme.style.grey4};
`;

/*bannerRadio 컴포넌트 스타일 */

export const BannerRadioArea = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	height: 2%;
	padding: 2%;
`;

export const Radio = styled.input<DisplayNoneProps>`
	height: 10px;
	display: ${({ displayNone }) => (displayNone ? 'none' : '')};
	margin: 3px;
`;
