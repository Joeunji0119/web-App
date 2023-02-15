import React, { useState } from 'react';
import Router from 'next/router';
import { convertIdToCatagoryName } from '@/src/constants/convert';
import { CATAGORYS } from './CATAGORYS';
import * as S from './style';

const Nav = () => {
	const [catagoryId, setCatagoryId] = useState<number>(1);

	const handleRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setCatagoryId(Number(e.currentTarget.id));
		let Id = convertIdToCatagoryName(CATAGORYS, e.currentTarget.id);
		e.currentTarget.id === '1' ? Router.push('/') : Router.push(`/${Id}`);
	};

	return (
		<S.NavLayout>
			{CATAGORYS.map(({ id, title }, idx) => {
				const buttonStyle = catagoryId === idx + 1;

				return (
					<S.Catagory
						id={String(id)}
						buttonStyle={buttonStyle}
						onClick={e => handleRoute(e)}
						key={id}>
						{title}
					</S.Catagory>
				);
			})}
		</S.NavLayout>
	);
};

export default Nav;
