import React from 'react';
import Link from 'next/link';
import { BannerDataProps } from '@/src/constants/types';
import * as S from './style';

const Banner = ({ item }: { item: BannerDataProps }) => {
	return (
		<S.BannerLayout>
			<Link href={item.link}>
				<S.BannerImage src={item.thumbnail} />
				<S.BannerTextAria>
					<S.BannerTitle>{item.title}</S.BannerTitle>
					<S.BannerDate>{item.date}</S.BannerDate>
				</S.BannerTextAria>
			</Link>
		</S.BannerLayout>
	);
};
export default Banner;
