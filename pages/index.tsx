import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { NextPageWithLayout } from '../types';

const Home: NextPageWithLayout = () => {
	return <Box>Home page</Box>;
};

Home.Layout = MainLayout;

export default Home;
