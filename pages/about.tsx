import { Header } from '@/components/common';
import { AdminLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import React from 'react';

// const Header = dynamic(() => import('@/components/common/Header'), {
// 	ssr: false,
// });

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
	const router = useRouter();
	const [postList, setPostList] = React.useState([]);
	const page = router.query?.page;

	React.useEffect(() => {
		if (!page) return;

		(async () => {
			const res = await fetch(
				`https://js-post-api.herokuapp.com/api/posts?_page=${page}`
			);
			const { data: posts } = await res.json();
			setPostList(posts);
		})();
	}, [page]);

	const handleNextClick = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: true }
		);
	};

	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About Page
			</Typography>
			<Header />
			<ul className="post-list">
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={handleNextClick}>Next page</button>
		</Box>
	);
}

AboutPage.Layout = AdminLayout;

export function getStaticProps() {
	console.log('get static props run!');

	return {
		props: {},
	};
}

// export function getServerSideProps() {
// 	return {
// 		props: {}, // will be passed to the page component as props
// 	};
// }
