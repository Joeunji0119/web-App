import React from 'react';
import styled from 'styled-components';

const BannerContainer = () => {
	return (
		<BannerContainerLayout>
			<Banner>
				<BannerImageAria>
					<BannerImage src='https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg' />
				</BannerImageAria>
				<BannerTextAria>asfasdfasad</BannerTextAria>
			</Banner>
			<Banner>
				<BannerImageAria>
					<BannerImage src='https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg' />
				</BannerImageAria>
				<BannerTextAria>asfasdfasad</BannerTextAria>
			</Banner>
			<Banner>
				<BannerImageAria>
					<BannerImage src='https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg' />
				</BannerImageAria>
				<BannerTextAria>asfasdfasad</BannerTextAria>
			</Banner>
		</BannerContainerLayout>
	);
};

export default BannerContainer;

const BannerContainerLayout = styled.div`
	${({ theme }) => theme.variables.flex('row', ' flex-start', 'center')};
	background: green;
	overflow-x: auto;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	min-height: 30px;
`;

const Banner = styled.div`
	margin: 3%;
	border: 1px solid ${({ theme }) => theme.style.grey3};
	border-radius: 20px;
	width: 70%;
`;

const BannerImageAria = styled.div`
	max-width: 1000px;
`;
// width: 70%;
// max-height: 50px;

const BannerTextAria = styled.div`
	background: yellow;
	height: 10%;
`;

const BannerImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 20px 20px 0 0;
	object-fit: cover;
`;
