import { Auth } from '@/components/common';
import { useAuth } from '@/hooks/useAuth';
import { LayoutProps } from '@/types/common';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function AdminLayout({ children }: LayoutProps) {
	const router = useRouter();
	const { logout } = useAuth({
		revalidateOnMount: false,
	});

	const handleLogout = async () => {
		try {
			await logout();
			router.push("/login");
		} catch (error) {
			console.log('Failed to logout!', error);
		}
	};

	return (
		<Auth>
			<h1>Admin Layout</h1>
			<button onClick={handleLogout}>Logout</button>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>{children}</div>
		</Auth>
	);
}
