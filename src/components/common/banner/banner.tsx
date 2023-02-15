import React from 'react';
import styled from 'styled-components';

const Banner = ({ item }) => {
	return (
		<BannerLayout>
			<BannerImage src={item.thumbnail} />
			<BannerTextAria>
				<BannerTitle>{item.title}</BannerTitle>
				<BannerDate>{item.date}</BannerDate>
			</BannerTextAria>
		</BannerLayout>
	);
};
export default Banner;

const BannerLayout = styled.div`
	min-width: 80vw;
	max-height: 50%;
	height: 60%;
	margin: 3%;
	border-radius: 20px;
	box-shadow: 1px 2px 3px ${({ theme }) => theme.style.grey3};
`;

const BannerTextAria = styled.div`
	${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
	min-height: 50px;
	padding: 0 10px;
`;

const BannerImage = styled.img`
	width: 100%;
	height: 60%;
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
