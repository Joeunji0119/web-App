import { NavProps } from './types';

export function convertIdToCatagoryName(
	CATAGORYS: NavProps[],
	clickedId: string
) {
	const [filter] = CATAGORYS.filter(({ id }) => id === Number(clickedId));

	return filter.name;
}
