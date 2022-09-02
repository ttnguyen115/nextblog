import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';

export function Footer() {
	const socialLinks = [
		{
			id: '1',
			icon: Facebook,
			url: 'https://google.com',
		},
		{
			id: '2',
			icon: Instagram,
			url: 'https://google.com',
		},
		{
			id: '3',
			icon: GitHub,
			url: 'https://google.com',
		},
		{
			id: '4',
			icon: LinkedIn,
			url: 'https://google.com',
		},
	];

	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction="row" justifyContent="center">
				{socialLinks.map((item) => (
					<Box
						component="a"
						key={item.id}
						p={2}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon component={item.icon} sx={{ fontSize: 48 }} />
					</Box>
				))}
			</Stack>
			<Typography>
				Copyright ©{new Date().getFullYear()} All rights reserved
			</Typography>
		</Box>
	);
}
