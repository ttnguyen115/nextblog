import { Footer, Header } from '@/components/common';
import { LayoutProps } from '@/types/common';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/works">
				<a>Works</a>
			</Link>
			<Box component="main" flexGrow={1}>
				<Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
					SM Container
				</Container>
				<Container sx={{ bgcolor: 'primary.main' }}>SM Container</Container>
				{children}
			</Box>
			<Footer />
		</Stack>
	);
}
