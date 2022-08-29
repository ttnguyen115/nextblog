import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../app';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

type IUseAuth = {
	profile: any;
	error: any;
	login: () => void;
	logout: () => void;
};

export function useAuth(options?: Partial<PublicConfiguration>): IUseAuth {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: MILLISECOND_PER_HOUR,
		revalidateOnFocus: false,
		...options,
	});

	async function login() {
		await authApi.login({
			username: 'test',
			password: '123123',
		});
		await mutate();
	}

	async function logout() {
		await authApi.logout();
		await mutate({}, false);
	}

	return {
		profile,
		error,
		login,
		logout,
	};
}
