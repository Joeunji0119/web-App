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

export interface BannerDataProps {
	id: number;
	thumbnail: string;
	date: string;
	link: string;
}

export interface BannerRadioProps {
	items: BannerDataProps[];
	activeIndex: number;
	handleRadio: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
