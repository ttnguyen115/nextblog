import { TextField, TextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = TextFieldProps & {
	name: string;
	control: Control<any>;
};

export function InputField({
	name,
	label,
	control,
	onChange: externalOnChange,
	onBlur: externalOnBlur,
	inputRef: externalInputRef,
	...props
}: InputFieldProps) {
	const {
		field: { onBlur, onChange, value, ref },
		fieldState: { error },
	} = useController({ name, control });

	return (
		<TextField
			{...props}
			name={name}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			inputRef={ref}
			error={!!error}
			helperText={error?.message}
			size="small"
			margin="normal"
			fullWidth
		/>
	);
}
