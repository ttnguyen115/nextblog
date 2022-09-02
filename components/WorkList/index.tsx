import { WorkCard } from '@/components/WorkList/WordCard';
import { Work } from '@/types';
import { Box, Divider } from '@mui/material';
import React from 'react';

export interface WorkListProps {
	workList: Array<Work>;
}

export function WorkList({ workList }: WorkListProps) {
	if (workList.length === 0) return null;

	return (
		<Box>
			{workList.map((work) => (
				<React.Fragment key={work.id}>
					<WorkCard work={work} />
					<Divider sx={{ my: 3 }} />
				</React.Fragment>
			))}
		</Box>
	);
}
