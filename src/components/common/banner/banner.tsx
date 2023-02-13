import React from 'react';
import styled from 'styled-components';

const Banner = () => {
	return (
		<BannerLayout>
			<BannerImageAria>
				<BannerImage src='https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg' />
			</BannerImageAria>
			<BannerTextAria>
				<BannerTitle>[M COUNTDOWN] 10월 2주차 엠카</BannerTitle>
				<BannerDate>2020.02.09 - 2020.04.08 17:00 (KST)</BannerDate>
			</BannerTextAria>
		</BannerLayout>
	);
};
export default Banner;

const BannerLayout = styled.div`
	min-width: 80vw;
	max-height: 50%;
	margin: 3%;
	border-radius: 20px;
	box-shadow: 1px 2px 3px ${({ theme }) => theme.style.grey3};
`;

const BannerImageAria = styled.div`
	/* max-height: 50vh; */
`;

const BannerTextAria = styled.div`
	${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
	min-height: 40px;
	padding: 0 10px;
`;

const BannerImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 20px 20px 0 0;
	object-fit: cover;
`;

const BannerTitle = styled.div`
	${({ theme }) => theme.variables.flex('', 'flex-start', 'center')}
	width: 100%;
	font-size: 12px;
	font-weight: 800;
`;

const BannerDate = styled.div`
	${({ theme }) => theme.variables.flex('', 'flex-end', 'center')}
	width: 100%;
	font-size: 4px;
	color: ${({ theme }) => theme.style.grey4};
`;
