import React from 'react';
import * as S from './style';

const Banner = ({ item }) => {
	return (
		<S.BannerLayout>
			<S.BannerImage src={item.thumbnail} />
			<S.BannerTextAria>
				<S.BannerTitle>{item.title}</S.BannerTitle>
				<S.BannerDate>{item.date}</S.BannerDate>
			</S.BannerTextAria>
		</S.BannerLayout>
	);
};
export default Banner;
