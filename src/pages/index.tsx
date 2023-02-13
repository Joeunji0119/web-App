import Head from 'next/head';
import ContentList from '../components/contents/contentList';

const Home = () => {
	return (
		<>
			<Head>
				<title>hanteo</title>
			</Head>
			<ContentList />
		</>
	);
};

export default Home;
