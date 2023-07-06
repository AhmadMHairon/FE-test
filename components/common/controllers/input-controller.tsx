import { Controller } from 'react-hook-form';
import { Input, InputProps } from '../input';
import { translateRHFErrorMsg } from '@/utils/translate-rhf-error-msg';

type InputControllerProps = {
    name: any;
    control: any;
} & InputProps

export function InputController({ name, control, helperText, error, ...otherInputProps }: InputControllerProps) {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error: stateError } }) => {
                const inputError = error || Boolean(stateError);
               
                const inputHelperText = helperText || translateRHFErrorMsg(stateError);
               
                return (
                    <Input
                        onChange={e => onChange(e.target.value)}
                        error={inputError}
                        value={value === null ? '' : value}
                        helperText={inputHelperText}
                        {...otherInputProps}
                    />
                )
            }
            }
        />
    );
}
