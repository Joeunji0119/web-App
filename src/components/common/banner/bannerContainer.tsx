import { BannerDataProps } from '@/src/pages/api/bannerData';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { clearInterval } from 'timers';
import Banner from './banner';

export interface isLastActiveIndexProps {
	isLastActiveIndex: boolean;
}

export interface displayNoneProps {
	displayNone: boolean;
}

const BannerContainer = () => {
	const [activeIndex, setActiveIndex] = useState(2);
	const [items, setItems] = useState<BannerDataProps[]>();
	const bannerRef = useRef<HTMLDivElement>(null);
	const widthRef = useRef<HTMLDivElement>(null);
	const API = `http://localhost:3333/api/bannerData`;

	const handleRadio = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		setActiveIndex(Number(e.currentTarget.id));
	};

	const convertBannerItem = items => {
		items.push(items[0]);
		items.push(items[1]);
		items.unshift(items[items.length - 3]);
		const convertItems = items.map((item, idx) => {
			return { ...item, id: idx + 1 };
		});

		return convertItems;
	};

	console.log(items);
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

	const isLastActiveIndex = activeIndex === 2;

	console.log(isLastActiveIndex);
	console.log('엥', activeIndex);
	return (
		<BannerContainerLayout>
			<BannersLayout ref={widthRef}>
				<Banners isLastActiveIndex={isLastActiveIndex} ref={bannerRef}>
					{items?.map((item, idx) => (
						<Banner key={idx} item={item} />
					))}
				</Banners>
			</BannersLayout>
			<BannerRadioArea>
				{items?.map(({ id }) => {
					const isChecked = id === activeIndex;
					const displayNone =
						id === 1 || id === items.length || id === items.length - 1;
					return (
						<Radio
							type='radio'
							name='contact'
							readOnly
							id={String(id)}
							key={id}
							onClick={e => handleRadio(e)}
							checked={isChecked ? true : false}
							displayNone={displayNone}
						/>
					);
				})}
			</BannerRadioArea>
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

const Banners = styled.div<isLastActiveIndexProps>`
	display: flex;
	width: 100vw;
	z-index: 3;
	transition: ${({ isLastActiveIndex }) =>
		isLastActiveIndex ? 'none' : 'all ease-in 0.7s .0s'};
`;

const BannerRadioArea = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	height: 2%;
	padding: 2%;
`;

const Radio = styled.input<displayNoneProps>`
	height: 10px;
	display: ${({ displayNone }) => (displayNone ? 'none' : '')};
	margin: 3px;
`;
