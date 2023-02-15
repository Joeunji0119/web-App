import React, { useRef } from 'react';

export const useScrollToTop = () => {
	const topRef = useRef<HTMLDivElement>(null);

	const handleTopRef = () => {
		topRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	return { topRef, handleTopRef };
};

export default useScrollToTop;
