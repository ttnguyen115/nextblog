import { authApi } from '@/app/index';

export default function LoginPage() {
	const handleLogin = async () => {
		try {
			await authApi.login({
				username: 'test',
				password: '123123',
			});
		} catch (error) {
			console.log("Failed to login!", error);
		}
	};

	const handleGetProfile = async () => {
		try {
			await authApi.getProfile();
		} catch (error) {
			console.log("Failed to get profile!", error);
		}
	};

	const handleLogout = async () => {
		try {
			await authApi.logout();
		} catch (error) {
			console.log("Failed to logout!", error);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleGetProfile}>Get Profile</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
