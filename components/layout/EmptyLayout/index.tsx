import React from 'react';
import { LayoutProps } from 'types';

export function EmptyLayout({ children }: LayoutProps) {
	return <React.Fragment>{children}</React.Fragment>;
}
