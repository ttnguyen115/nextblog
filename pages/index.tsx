import { SEO } from '@/components/common';
import { FeaturedWorks } from '@/components/FeaturedWorks';
import { HeroSection } from '@/components/HeroSection';
import { MainLayout } from '@/components/layout';
import { RecentPosts } from '@/components/RecentPosts';
import { Box } from '@mui/material';
import { NextPageWithLayout } from '../types';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<SEO
				data={{
					title: 'NextBlog | JettNg',
					description:
						'This is the personal side project for learning technical skills about Next.js, Typescript and MUI v5. The main content of this project is about blog post and related CRUD.',
					url: 'https://www.google.com.vn',
					thumbnailUrl: 'https://picsum.photos/500',
				}}
			/>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
