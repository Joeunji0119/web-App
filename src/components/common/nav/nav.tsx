import { convertIdToCatagoryName } from '@/src/constants/convert';
import { NavProps } from '@/src/constants/types';
import Router from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CATAGORYS } from './CATAGORYS';

const Nav = () => {
	const [catagoryId, setCatagoryId] = useState<number>(1);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setCatagoryId(Number(e.currentTarget.id));
		let Id = convertIdToCatagoryName(CATAGORYS, e.currentTarget.id);
		e.currentTarget.id === '1' ? Router.push('/') : Router.push(`/${Id}`);
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
	height: 6%;
	background: ${({ theme }) => theme.style.pink1};
	z-index: 30;
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
	cursor: pointer;
`;
