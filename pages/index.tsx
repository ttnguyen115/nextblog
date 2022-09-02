import { FeaturedWorks } from '@/components/FeaturedWorks';
import { HeroSection } from '@/components/HeroSection';
import { MainLayout } from '@/components/layout';
import { RecentPosts } from '@/components/RecentPosts';
import { Box } from '@mui/material';
import { NextPageWithLayout } from '../types';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
