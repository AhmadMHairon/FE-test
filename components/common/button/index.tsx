/* eslint-disable react/display-name */
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '@/@types/poly';
import { cls } from '@/utils/cls';
import { forwardRef } from 'react';
import { ButtonVariantsType, buttonVariants } from './variance';


export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
    C,
    {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
        loading?: boolean;
        loadingPosition?: 'start' | 'end';
        loadingIndicator?: React.ReactNode;
    } & ButtonVariantsType
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>
) => JSX.Element | null;

export const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        {
            children,
            loadingPosition = 'end',
            loading,
            loadingIndicator = '...',
            className,
            disabled,
            color,
            size,
            as,
            ...props
        }: ButtonProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || 'button';

        return (
            <Component
                className={cls(
                    buttonVariants({ color, size }),
                    loading && 'inline-flex items-center',
                    className
                )}
                ref={ref}
                disabled={disabled}
                {...props}>
                {loading && loadingPosition === 'start' && loadingIndicator}
                <span className="mx-1.5">{children}</span>
                {loading && loadingPosition === 'end' && loadingIndicator}
            </Component>
        );
    }
);
