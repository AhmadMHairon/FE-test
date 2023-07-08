import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('rounded-lg', {
    variants: {
        color: {
            primary: [
                'bg-primary-dark',
                'text-white',
                'border-transparent',
                'hover:[&:not(:disabled)]:bg-primary-main hover:transition-all hover:duration-200',
                'focus:ring-primary-main focus:outline-none focus:bg-primary-main focus:ring-1 focus:ring-offset-1',
                'disabled:bg-primary-lighter disabled:text-primary-main disabled:cursor-not-allowed',
            ],
            secondary: [
                'bg-white',
                'text-primary-main',
                'border-transparent',
                'hover:[&:not(:disabled)]:bg-gray-100 hover:transition-all hover:duration-200',
                'focus:ring-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-offset-1',
                'disabled:bg-gray-300 disabled:text-primary-main disabled:cursor-not-allowed',
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
