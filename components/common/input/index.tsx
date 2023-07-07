import React from 'react';
import { cls } from '@/utils/cls';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    placeholder?: string;
    containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, containerClassName, type, id, error, placeholder, ...props }, ref) => (
        <div className={containerClassName}>
            <div className="relative w-full">
                <input
                    id={id}
                    type={type}
                    className={cls(
                        'peer flex h-10 w-full focus rounded-md border border-input bg-background px-3',
                        'py-2 text-sm  file:border-0 file:bg-transparent file:text-sm',
                        'file:font-medium placeholder:text-muted-foreground focus-visible:outline-none ring-primary-main focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                        'placeholder-transparent',
                        !!error ? 'border-red-500' : 'border-inherit focus:border-primary-main',
                        className
                    )}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                />
                <label
                    className={cls(
                        'transition-all duration-300',
                        '-top-1/2 pointer-events-none',
                        'absolute flex items-center text-gray-400 text-sm rtl:right-0 ltr:left-0',
                        'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:ltr:ml-4 peer-placeholder-shown:rtl:mr-4',
                        'peer-focus:-top-1/2 peer-focus:ltr:ml-0 peer-focus:rtl:mr-0 peer-focus:translate-y-0 bg-white'
                    )}
                    htmlFor={id}>
                    {placeholder}
                </label>
            </div>
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    )
);

Input.displayName = 'Input';
