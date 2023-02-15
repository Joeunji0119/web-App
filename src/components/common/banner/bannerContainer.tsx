import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { clearInterval } from 'timers';
import Banner from './banner';

const items = [
	{
		id: 1,
		title: '[M COUNTDOWN] 10월 1주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/hanteoglobal-service/',
	},
	{
		id: 2,
		title: '[M COUNTDOWN] 10월 2주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/',
	},
	{
		id: 3,
		title: '[M COUNTDOWN] 10월 3주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/%ea%b0%80%ec%b9%98%ec%8b%a4%ed%98%84/',
	},
];

const BannerContainer = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	const bannerRef = useRef<HTMLDivElement>(null);
	const widthRef = useRef<HTMLDivElement>(null);

	const handleRadio = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		setActiveIndex(Number(e.currentTarget.id));
	};

	useEffect(() => {
		let imgWidth = widthRef.current.offsetWidth;
		let moveX = (activeIndex - 1) * imgWidth * 0.8;

		bannerRef.current.style.transform = `translateX(-${moveX}px`;

		if (activeIndex > items.length) {
			setActiveIndex(prev => prev - items.length);
		}
	}, [activeIndex]);

	useEffect(() => {
		setInterval(() => {
			setActiveIndex(prev => prev + 1);
		}, 4000);
		return () => clearInterval();
	}, []);

	return (
		<BannerContainerLayout>
			<BannersLayout ref={widthRef}>
				<Banners ref={bannerRef}>
					{items.map(item => (
						<Banner key={item.id} item={item} />
					))}
				</Banners>
			</BannersLayout>
			<BannerRadio>
				{items.map(({ id }) => {
					const isChecked = id === activeIndex;
					return (
						<input
							readOnly
							key={id}
							type='radio'
							id={String(id)}
							name='contact'
							onClick={e => handleRadio(e)}
							checked={isChecked ? true : false}
						/>
					);
				})}
			</BannerRadio>
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
	overflow: hidden;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	width: 100%;
	min-height: 24vh;
`;

const Banners = styled.div`
	display: flex;
	width: 100%;
	z-index: 3;
	transition: all ease-in 3s 0s;
`;

const BannerRadio = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	height: 2%;
	padding: 2%;
`;
