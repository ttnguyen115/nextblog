import { useRouter } from 'next/router';
import { useAuth } from '../hooks';

export default function LoginPage() {
	const router = useRouter();
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	});

	const handleLogin = async () => {
		try {
			await login();
			router.push('/about');
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

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<button onClick={() => router.push('/about')}>Go to about</button>
		</div>
	);
}
