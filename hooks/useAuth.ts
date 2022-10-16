import { authApi } from '@/app';
import { LoginPayload } from '@/types';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

type IUseAuth = {
	profile: any;
	error: any;
	login: (payload: LoginPayload) => void;
	logout: () => void;
	firstLoading: boolean;
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

	const firstLoading = profile === undefined && error === undefined;

	async function login(payload: LoginPayload) {
		await authApi.login(payload);
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
		firstLoading,
	};
}
