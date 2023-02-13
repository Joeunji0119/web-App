import { Data } from '@/src/pages/api/mock';
import axios from 'axios';
import { request } from 'https';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Content from './content';

const ContentList = () => {
	const [contentList, setContentList] = useState<Data[]>([]);
	const refObserver = useRef<HTMLDivElement>(null);
	const viewport = useRef<HTMLDivElement>(null);
	const API = `http://localhost:3333/api/mock`;
	useEffect(() => {
		const option = {
			root: null,
			threshold: 0.7,
		};

		const handObserver = () => {
			axios
				.get(API)
				.then(res => setContentList(prev => [...prev, ...res.data]));
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					handObserver();
				}
			});
		}, option);

		observer.observe(refObserver.current);
	}, []);

	return (
		<>
			<ContentListLayout ref={viewport}>
				<ContentsTitle>콘텐츠 큐레이션 제목</ContentsTitle>
				{contentList.map(({ text }, idx) => {
					return <Content key={idx} text={text} />;
				})}
				<ObserverDiv ref={refObserver} />
			</ContentListLayout>
		</>
	);
};

export default ContentList;

const ContentListLayout = styled.section`
	background: ${({ theme }) => theme.style.grey1};
	height: 60%;
	min-height: 60vh;
	padding: 5% 4% 0 4%;
`;

const ContentsTitle = styled.div`
	font-size: 13px;
`;

const ObserverDiv = styled.div`
	height: 30vh;
	width: 10vw;
`;
