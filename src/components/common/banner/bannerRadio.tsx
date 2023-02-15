import { BannerRadioProps } from '@/src/constants/types';
import React from 'react';
import * as S from './style';

const BannerRadio = ({ items, activeIndex, handleRadio }: BannerRadioProps) => {
	return (
		<S.BannerRadioArea>
			{items?.map(({ id }) => {
				const isChecked = id === activeIndex;
				const displayNone =
					id === 1 || id === items.length || id === items.length - 1;

				return (
					<S.Radio
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
		</S.BannerRadioArea>
	);
};

export default BannerRadio;
