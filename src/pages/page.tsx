import axios from 'axios';
import React from 'react';

const Page = () =>
	// { id }: { id: any }
	{
		// console.log(id);
		return <div>asdfasd</div>;
	};

export default Page;

// export const getStaticProps = async (context: any) => {
// 	const { id } = context.params;

// const data = await axios(`${process.env.REACT_APP_PHOTO_API}/${id}`);
// const photo = await data.data;

// 	return {
// 		props: {
// 			id,
// 		},
// 	};
// };

// export const getStaticPaths = async () => {
// 	const res = await fetch(process.env.REACT_APP_PHOTOS_API);
// 	const photos = await res.json();
// 	const ids = photos.map(photo => photo.id);
// 	const paths = ids.map(id => {
// 		return { params: { id: id.toString() } };
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };
