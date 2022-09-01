import avatar from '@/assets/avatar.png';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export function HeroSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					spacing={4}
					textAlign={{ xs: 'center', md: 'left' }}
				>
					<Box>
						<Typography
							component="h1"
							variant="h3"
							fontWeight="bold"
							mb={{ xs: 3.5, md: 5 }}
						>
							Hi, I am Jett, <br />
							Front-end Developer
						</Typography>
						<Typography mb={{ xs: 3.5, md: 5 }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
							ipsum in est rerum voluptatum hic fugiat quas soluta voluptas
							deserunt sint, expedita natus inventore tempore nobis unde
							molestiae libero aliquid.
						</Typography>
						<Button variant="contained" size="large">
							Download Resume
						</Button>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image src={avatar} layout="responsive" alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
