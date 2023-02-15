import styled from 'styled-components';
import BannerContainer from './common/banner/bannerContainer';
import Footer from './common/footer';
import Nav from './common/nav/nav';
import useScrollToTop from './hooks/useScrollToTop';

const LayoutConatainer = ({ children }: { children: React.ReactNode }) => {
	const { topRef, handleTopRef } = useScrollToTop();

	return (
		<Layout ref={topRef}>
			<Nav />
			<BannerContainer />
			<main>{children}</main>
			<Footer handleTopRef={handleTopRef} />
		</Layout>
	);
};

export default LayoutConatainer;

const Layout = styled.main`
	width: 100vw;
	height: 100vh;
`;
