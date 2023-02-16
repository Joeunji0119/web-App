import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import Footer from './common/footer/footer';
import Nav from './common/nav/nav';
import useScrollToTop from './hooks/useScrollToTop';

const LayoutConatainer = ({ children }: { children: React.ReactNode }) => {
	const { topRef, handleTopRef } = useScrollToTop();

	const router = useRouter();

	return (
		<Layout ref={topRef}>
			<Nav />
			<main>{children}</main>
			<Footer handleTopRef={handleTopRef} />
		</Layout>
	);
};

export default LayoutConatainer;

const Layout = styled.div`
	width: 100vw;
	height: 100vh;
`;
