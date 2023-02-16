import type { NextApiRequest, NextApiResponse } from 'next';
import { ContentDataProps } from '@/src/constants/types';

const Datas = [
	{ id: 1, text: 'test' },
	{ id: 2, text: 'test' },
	{ id: 3, text: 'test' },
	{ id: 4, text: 'test' },
	{ id: 5, text: 'test' },
	{ id: 6, text: 'test' },
	{ id: 7, text: 'test' },
	{ id: 8, text: 'test' },
	{ id: 9, text: 'test' },
	{ id: 10, text: 'test' },
	{ id: 11, text: 'test' },
	{ id: 12, text: 'test' },
	{ id: 13, text: 'test' },
	{ id: 14, text: 'test' },
	{ id: 15, text: 'test' },
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ContentDataProps[]>
) {
	res.status(200).json(Datas);
}
