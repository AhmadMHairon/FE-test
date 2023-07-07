import { Control, Controller, FieldValues } from 'react-hook-form';
import { Input, InputProps } from '../input';
import { translateRHFErrorMsg } from '@/utils/translate-rhf-error-msg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InputControllerProps<T extends FieldValues = any> = {
    name: string;
    control: Control<T>;
} & InputProps;

export function InputController({ name, control, error, ...props }: InputControllerProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error: stateError } }) => {
                const inputHelperText = error || translateRHFErrorMsg(stateError);

                return (
                    <Input
                        onChange={e => onChange(e.target.value)}
                        error={inputHelperText}
                        {...props}
                    />
                );
            }}
        />
    );
}
