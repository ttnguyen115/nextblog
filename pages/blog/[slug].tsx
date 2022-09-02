import { Post } from '@/types';
import { getPostList } from '@/utils';
import { Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface BlogPageProps {
	post: Post;
}

export default function BlogPage({ post }: BlogPageProps) {
	if (!post) return;

	return (
		<Container>
			<h1>Post Detail Page</h1>
			<p>{post.title}</p>
			<p>{post.author?.name}</p>
			<p>{post.description}</p>
			<div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }} />
		</Container>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const postList = await getPostList();

	return {
		paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
	context: GetStaticPropsContext
) => {
	const postList = await getPostList();
	const slug = context.params?.slug;
	if (!slug) return { notFound: true };

	const post = postList.find((x) => x.slug === slug);
	if (!post) return { notFound: true };

	// convert md to html
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeDocument, { title: post.title })
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(post.mdContent || '');
	post.htmlContent = file.toString();

	return {
		props: {
			post,
		},
	};
};
