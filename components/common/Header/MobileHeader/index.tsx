import { ROUTE_LIST } from '@/constants/routes';
import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	Button,
	Container,
	Drawer,
	Link as MuiLink,
	Stack,
} from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function MobileHeader() {
	const router = useRouter();
	const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

	const handleToggleDrawer =
		(open?: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setIsOpenDrawer(open || !isOpenDrawer);
		};

	return (
		<Box display={{ xs: 'block', md: 'none' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					<Button onClick={handleToggleDrawer(true)}>
						<MenuIcon />
					</Button>
					<Drawer
						open={isOpenDrawer}
						onClose={handleToggleDrawer(false)}
						anchor="right"
						PaperProps={{ sx: { width: 250, textAlign: 'center', py: 3 } }}
					>
						{ROUTE_LIST.map((route) => (
							<Link key={route.path} passHref href={route.path}>
								<MuiLink
									sx={{ mb: 2, fontWeight: 'medium' }}
									className={clsx({ active: router.pathname === route.path })}
								>
									{route.label}
								</MuiLink>
							</Link>
						))}
					</Drawer>
				</Stack>
			</Container>
		</Box>
	);
}
