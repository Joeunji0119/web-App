import React from 'react';
import styled from 'styled-components';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import Content from './content';

const ContentList = () => {
	const { contentList, refObserver } = useInfiniteScroll();

	return (
		<>
			<ContentListLayout>
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
