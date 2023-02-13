import React from 'react';
import styled from 'styled-components';
import Content from './content';

const ContentList = () => {
	return (
		<ContentListLayout>
			<ContentsTitle>콘텐츠 큐레이션 제목</ContentsTitle>
			<Content />
		</ContentListLayout>
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
