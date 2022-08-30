import React from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
	return (
		<React.Fragment>
			<DesktopHeader />
			<MobileHeader />
		</React.Fragment>
	);
}
