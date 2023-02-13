import styled from 'styled-components';
import BannerContainer from './common/banner/bannerContainer';
import Footer from './common/footer';
import Nav from './common/nav';

const LayoutConatainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Layout>
			<Nav />
			<main>{children}</main>
			<BannerContainer />
			<Footer />
		</Layout>
	);
};

export default LayoutConatainer;

const Layout = styled.main`
	width: 100vw;
	height: 100vh;
`;
