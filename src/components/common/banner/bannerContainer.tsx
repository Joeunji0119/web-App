import React from 'react';
import useInfiniteBanner from '../../hooks/useInfiniteBanner';
import Banner from './banner';
import BannerRadio from './bannerRadio';
import * as S from './style';

const BannerContainer = () => {
	const {
		widthRef,
		activeIndex,
		isLastActiveIndex,
		bannerRef,
		items,
		handleRadio,
	} = useInfiniteBanner();

	return (
		<S.BannerContainerLayout>
			<S.BannersLayout ref={widthRef}>
				<S.Banners isLastActiveIndex={isLastActiveIndex} ref={bannerRef}>
					{items?.map((item, idx) => (
						<Banner key={idx} item={item} />
					))}
				</S.Banners>
			</S.BannersLayout>
			<BannerRadio
				items={items}
				activeIndex={activeIndex}
				handleRadio={handleRadio}
			/>
		</S.BannerContainerLayout>
	);
};

export default BannerContainer;
