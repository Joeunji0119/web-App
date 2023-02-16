import { MouseEventHandler } from 'react';

export interface NavProps {
	id: number;
	title: string;
	name: string;
}

export interface IsLastActiveIndexProps {
	isLastActiveIndex: boolean;
}

export interface DisplayNoneProps {
	displayNone: boolean;
}

export interface ContentDataProps {
	id: number;
	text: string;
}

export interface BannerDataProps {
	id: number;
	thumbnail: string;
	date: string;
	title: string;
	link: string;
}

export interface BannerRadioProps {
	items: BannerDataProps[];
	activeIndex: number;
	handleRadio: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export interface handleTopRefProps {
	handleTopRef: MouseEventHandler<HTMLDivElement>;
}
