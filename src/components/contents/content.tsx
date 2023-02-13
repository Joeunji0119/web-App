import React from 'react';
import styled from 'styled-components';

const Content = () => {
	return (
		<ContextLayout>
			<ContentTitle />
		</ContextLayout>
	);
};

export default Content;

const ContextLayout = styled.div`
	height: 40px;
	background: white;
	border-radius: 5px;
	margin-top: 15px;
`;

const ContentTitle = styled.div`
	width: 50px;
	height: 100%;
	background: ${({ theme }) => theme.style.grey4};
	border-radius: 5px;
`;
