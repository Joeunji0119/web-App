// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface Data {
	id: number;
	text: string;
}

const Datas = [
	{ id: 1, text: 'test' },
	{ id: 2, text: 'test' },
	{ id: 3, text: 'test' },
	{ id: 4, text: 'test' },
	{ id: 5, text: 'test' },
	{ id: 6, text: 'test' },
	{ id: 7, text: 'test' },
	{ id: 8, text: 'test' },
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>
) {
	res.status(200).json(Datas);
}
