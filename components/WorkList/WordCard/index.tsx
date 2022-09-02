import { Work } from '@/types';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export interface WorkCardProps {
	work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
	return (
		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
			<Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
				<Image
					src={work.thumbnailUrl}
					alt={`work-item-thumbnail-${work.id}`}
					width={246}
					height={180}
					layout="responsive"
					style={{ borderRadius: '10px' }}
				/>
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold">
					{work.title}
				</Typography>
				<Stack direction="row" my={2}>
					<Chip
						label={new Date(Number(work.createdAt)).getFullYear()}
						size="small"
						color="secondary"
					/>
					<Typography ml={3} color="GrayText">
						{work.tagList.join(', ')}
					</Typography>
				</Stack>
				<Typography>{work.shortDescription}</Typography>
			</Box>
		</Stack>
	);
}
