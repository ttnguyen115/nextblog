import { ROUTE_LIST } from '@/constants/routes';
import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function DesktopHeader() {
	const router = useRouter();

	return (
		<Box display={{ xs: 'none', md: 'block' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink
								sx={{ ml: 2, fontWeight: 'medium' }}
								className={clsx({ active: router.pathname === route.path })}
							>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
