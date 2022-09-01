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
		</Box>
	);
};

Home.Layout = MainLayout;

export default Home;
