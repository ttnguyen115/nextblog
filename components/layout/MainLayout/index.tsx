import { LayoutProps } from '@/types/common';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Main Layout</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
