import styled from 'styled-components';

export const ContentListLayout = styled.section`
	background: ${({ theme }) => theme.style.grey1};
	height: 60%;
	width: 100vw;
	min-height: 60vh;
	padding: 5% 4% 0 4%;
`;

export const ContentsTitle = styled.div`
	font-size: 13px;
`;

export const ObserverDiv = styled.div`
	height: 50vh;
	width: 10vw;
`;

export const ContextLayout = styled.div`
	height: 40px;
	background: white;
	border-radius: 5px;
	margin-top: 15px;
`;

export const ContentTitle = styled.div`
	width: 50px;
	height: 100%;
	background: ${({ theme }) => theme.style.grey4};
	border-radius: 5px;
`;
