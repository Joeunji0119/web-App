import { BannerDataProps } from '@/src/constants/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const Datas = [
	{
		id: 1,
		title: '[M COUNTDOWN] 10월 1주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/hanteoglobal-service/',
	},
	{
		id: 2,
		title: '[M COUNTDOWN] 10월 2주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/',
	},
	{
		id: 3,
		title: '[M COUNTDOWN] 10월 3주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/%ea%b0%80%ec%b9%98%ec%8b%a4%ed%98%84/',
	},
	{
		id: 4,
		title: '[M COUNTDOWN] 10월 4주차 엠카',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800',
		date: '2020.02.09 - 2020.04.08 17:00 (KST)',
		link: 'http://hanteoglobal.com/%ea%b0%80%ec%b9%98%ec%8b%a4%ed%98%84/',
	},
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<BannerDataProps[]>
) {
	res.status(200).json(Datas);
}
