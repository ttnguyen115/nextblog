import { LayoutProps } from '@/types/common';
import React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
	return <React.Fragment>{children}</React.Fragment>;
}
