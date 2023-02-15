import { convertBannerItem } from '@/src/constants/convert';
import { BannerDataProps } from '@/src/constants/types';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export const useInfiniteBanner = () => {
	const [activeIndex, setActiveIndex] = useState(2);
	const [items, setItems] = useState<BannerDataProps[]>();
	const bannerRef = useRef<HTMLDivElement>(null);
	const widthRef = useRef<HTMLDivElement>(null);

	const API = `http://localhost:3333/api/bannerData`;

	useEffect(() => {
		axios
			.get(API)
			.then(res => setItems(convertBannerItem(res.data)))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		let imgWidth = widthRef.current.offsetWidth;
		let moveX = (activeIndex - 1) * imgWidth * 0.86;

		bannerRef.current.style.transform = `translateX(-${moveX}px`;

		if (activeIndex > items?.length - 1) {
			setActiveIndex(prev => (prev = 2));
		}
	}, [activeIndex]);

	useEffect(() => {
		setInterval(() => {
			setActiveIndex(prev => prev + 1);
		}, 3000);
		return () => clearInterval();
	}, []);

	const handleRadio = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		setActiveIndex(Number(e.currentTarget.id));
	};

	const isLastActiveIndex = activeIndex === 2;

	return {
		widthRef,
		isLastActiveIndex,
		bannerRef,
		items,
		handleRadio,
		activeIndex,
	};
};

export default useInfiniteBanner;
