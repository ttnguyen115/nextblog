import { MainLayout } from '@/components/layout';
import PostItem from '@/components/PostItem';
import { Post } from '@/types';
import { getPostList } from '@/utils';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
	posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
	return (
		<Box>
			<Container>
				<h1>Blog</h1>
				<Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`/blog/${post.slug}`}>
								<a>
									<PostItem post={post} />
								</a>
							</Link>
							<Divider sx={{ my: 3 }} />
						</li>
					))}
				</Box>
			</Container>
		</Box>
	);
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// convert markdown files into list of javascript objects
	const postList = await getPostList();

	return {
		props: {
			posts: postList,
		},
	};
};
