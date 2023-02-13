import Router from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = () => {
	const [catagoryId, setCatagoryId] = useState<number>(1);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setCatagoryId(Number(e.currentTarget.id));
		e.currentTarget.id === '1'
			? Router.push('/')
			: Router.push(`hanteo/${e.currentTarget.id}`);
	};

	return (
		<NavLayout>
			{CATAGORYS.map(({ id, title }, idx) => {
				const buttonStyle = catagoryId === idx + 1;

				return (
					<Catagory
						id={String(id)}
						buttonStyle={buttonStyle}
						onClick={e => handleRoute(e)}
						key={id}>
						{title}
					</Catagory>
				);
			})}
		</NavLayout>
	);
};

export default Nav;

const NavLayout = styled.nav`
	${({ theme }) => theme.variables.flex('row', ' flex-start', 'center')};
	${({ theme }) => theme.variables.position('sticky', '0', '', '', '')};
	height: 7%;
	background: ${({ theme }) => theme.style.pink};
	overflow-x: auto;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const Catagory = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	min-width: 20vw;
	font-size: 17px;
	font-weight: 800;
	color: ${({ buttonStyle }: { buttonStyle: boolean }) =>
		buttonStyle ? 'white' : 'black'};
`;

const CATAGORYS = [
	{ id: 1, title: '차트' },
	{ id: 2, title: 'Whook' },
	{ id: 3, title: '이벤트' },
	{ id: 4, title: '뉴스' },
	{ id: 5, title: '스토어' },
	{ id: 6, title: '충전소' },
	{ id: 7, title: '고객사항' },
];
