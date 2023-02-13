// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	id: number;
	text: string;
}

const Datas = [
	{ id: 1, text: 'test' },
	{ id: 2, text: 'test' },
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>
) {
	res.status(200).json(Datas);
}
