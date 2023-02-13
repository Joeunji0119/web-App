import React from 'react';
import styled from 'styled-components';
import Banner from './banner';

const BannerContainer = () => {
	return (
		<BannerContainerLayout>
			<BannersLayout>
				<Banner />
				<Banner />
				<Banner />
			</BannersLayout>
			<BannerDots>
				<input type='radio' id='contactChoice1' name='contact' value='email' />
				<input type='radio' id='contactChoice1' name='contact' value='email' />
				<input type='radio' id='contactChoice1' name='contact' value='email' />
			</BannerDots>
		</BannerContainerLayout>
	);
};

export default BannerContainer;

const BannerContainerLayout = styled.div`
	${({ theme }) => theme.variables.flex('column', 'center', 'center')};
	width: 100vw;
	min-height: 28vh;
`;

const BannersLayout = styled.div`
	${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')}
	overflow-x: auto;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	width: 100%;
	min-height: 24vh;
`;

const BannerDots = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	height: 2%;
	padding: 2%;
`;
