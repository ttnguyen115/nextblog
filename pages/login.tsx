import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/types';
import { useRouter } from 'next/router';

export default function LoginPage() {
	const router = useRouter();
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	});

	const handleLoginSubmit = async (payload: LoginPayload) => {
		try {
			await login(payload);
		} catch (error) {
			console.log('Failed to login!', error);
		}
	};

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.log('Failed to logout!', error);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>

			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

			<button onClick={handleLogout}>Logout</button>
			<button onClick={() => router.push('/about')}>Go to about</button>
			<LoginForm onSubmit={handleLoginSubmit} />
		</div>
	);
}
