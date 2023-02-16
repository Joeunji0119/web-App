import Head from 'next/head';
import BannerContainer from '../components/common/banner/bannerContainer';
import ContentList from '../components/contents/contentList';

const Home = () => {
	return (
		<>
			<Head>
				<title>hanteo</title>
			</Head>
			<BannerContainer />
			<ContentList />
		</>
	);
};

export default Home;
