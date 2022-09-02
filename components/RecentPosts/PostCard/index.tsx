import PostItem from '@/components/PostItem';
import { Post } from '@/types/posts';
import { Card, CardContent } from '@mui/material';

export interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	if (!post) return null;

	return (
		<Card>
			<CardContent>
				<PostItem post={post} />
			</CardContent>
		</Card>
	);
}
