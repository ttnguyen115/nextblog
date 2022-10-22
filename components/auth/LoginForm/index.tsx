import { InputField } from '@/components/form';
import { LoginPayload } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface LoginFormProps {
	onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
	const schema = yup.object().shape({
		username: yup
			.string()
			.required('Please enter your username!')
			.min(4, 'Username is required at least 4 characters!'),
		password: yup
			.string()
			.required('Please enter your password!')
			.min(6, 'Password is required at least 6 characters!'),
	});
	const [showPassword, setShowPassword] = React.useState(false);
	const { control, handleSubmit } = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	function handleLoginSubmit(payload: LoginPayload) {
		console.log(payload);
		onSubmit?.(payload);
	}

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
			<InputField name="username" control={control} />
			<InputField
				name="password"
				control={control}
				type={showPassword ? 'text' : 'password'}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button variant="contained" type="submit">
				Login
			</Button>
		</Box>
	);
}
