import { DataProps } from '@/src/pages/api/contentData';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = () => {
	const [contentList, setContentList] = useState<DataProps[]>([]);
	const refObserver = useRef<HTMLDivElement>(null);

	const API = `http://localhost:3333/api/contentData`;

	useEffect(() => {
		const option = {
			root: null,
			threshold: 0.7,
		};

		const handObserver = async () => {
			await axios
				.get(API)
				.then(res => setContentList(prev => [...prev, ...res.data]))
				.catch(err => console.log(err));
		};

		let observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					handObserver();
				}
			});
		}, option);

		observer.observe(refObserver.current);
	}, []);

	return { contentList, refObserver };
};
