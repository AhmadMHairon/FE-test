import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('rounded-lg', {
    variants: {
        color: {
            primary: [
                'bg-primary-main',
                'text-white',
                'border-transparent',
                'hover:[&:not(:disabled)]:bg-primary-light hover:transition-all hover:duration-200',
                'focus:ring-primary-light focus:outline-none focus:bg-primary-light focus:ring-1 focus:ring-offset-1',
                'disabled:bg-primary-lighter disabled:text-primary-main disabled:cursor-not-allowed',
            ],
        },
        size: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-base', 'py-2', 'px-4'],
            large: ['text-lg', 'py-3', 'px-6'],
        },
    },

    compoundVariants: [
        {
            color: 'primary',
            size: 'small',
        },
        {
            color: 'primary',
            size: 'medium',
        },
        {
            color: 'primary',
            size: 'large',
        },
    ],
    defaultVariants: {
        color: 'primary',
        size: 'medium',
    },
});

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;
