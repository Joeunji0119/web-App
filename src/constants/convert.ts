import { BannerDataProps, NavProps } from './types';

export function convertIdToCatagoryName(
	CATAGORYS: NavProps[],
	clickedId: string
) {
	const [filter] = CATAGORYS.filter(({ id }) => id === Number(clickedId));

	return filter.name;
}

export const convertBannerItem = (items: BannerDataProps[]) => {
	items.push(items[0]);
	items.push(items[1]);
	items.unshift(items[items.length - 3]);
	const convertItems = items.map((item, idx) => {
		return { ...item, id: idx + 1 };
	});
	return convertItems;
};
