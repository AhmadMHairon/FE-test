/* eslint-disable react/display-name */
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '@/@types/poly';
import { cls } from '@/utils/cls';
import { forwardRef, useState } from 'react';
import { ButtonVariantsType, buttonVariants } from './variance';
import { ButtonLoading } from './loading';

const spanStyles = (expand: boolean) => ({
    width: expand ? '50%' : '10%',
    height: expand ? '50%' : '20%',
    transition: 'all 0.3s ease',
});

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
) => any | null;

export const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        {
            children,
            loadingPosition = 'end',
            loading,
            loadingIndicator = <ButtonLoading />,
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
        const [hovered, setHovered] = useState(false);

        return (
            <Component
                className={cls(
                    buttonVariants({ color, size }),
                    loading && 'inline-flex justify-center items-center transition-all ',
                    className,
                    disabled && 'cursor-not-allowed'
                )}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                ref={ref}
                disabled={disabled}
                {...props}>
                {loading && loadingPosition === 'start' && loadingIndicator}
                {children}
                {loading && loadingPosition === 'end' && loadingIndicator}
                <span
                    className={cls('top-0 right-0 border-t-2 border-r-2 edge')}
                    style={{ ...spanStyles(hovered || !!disabled) }}
                />
                <span
                    className={cls('top-0 left-0 border-t-2 border-l-2 edge')}
                    style={{ ...spanStyles(hovered || !!disabled) }}
                />
                <span
                    className={cls('bottom-0 right-0 border-b-2 border-r-2 edge')}
                    style={{ ...spanStyles(hovered || !!disabled) }}
                />
                <span
                    className={cls('bottom-0 left-0 border-b-2 border-l-2 edge')}
                    style={{ ...spanStyles(hovered || !!disabled) }}
                />
            </Component>
        );
    }
);
