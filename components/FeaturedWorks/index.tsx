import { WorkList } from '@/components/WorkList';
import { Work } from '@/types';
import { Box, Container, Typography } from '@mui/material';

export function FeaturedWorks() {
	const workList: Array<Work> = [
		{
			id: '1',
			title: 'Designing Dashboards',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Dashboard'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl: 'https://picsum.photos/246/180',
		},
		{
			id: '2',
			title: 'Vibrant Portraits of 2020',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Illustration'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl: 'https://picsum.photos/246/180',
		},
		{
			id: '3',
			title: '36 Days of Malayalam type',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl: 'https://picsum.photos/246/180',
		},
	];

	return (
		<Box component="section" pt={2} pb={4}>
			<Container>
				<Typography variant="h5" mb={4}>
					Featured Works
				</Typography>
				<WorkList workList={workList} />
			</Container>
		</Box>
	);
}
