import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('rounded-md relative whitespace-nowrap', {
    variants: {
        color: {
            primary: [
                'bg-secondary-main',
                'text-primary-main',
                "overflow-hidden",
                '[&>.edge]:border-transparent',
                '[&>.edge]:absolute',
                // 'hover:[&:not(:disabled)]:bg-secondary-main ',
                // 'focus:ring-primary-main focus:outline-none focus:bg-primary-main focus:ring-1 focus:ring-offset-1',
            ],
            secondary: [
                'bg-transparent',
                'text-primary-light',
                'border-secondary-main',
                '[&>.edge]:border-primary-light',
                '[&>.edge]:absolute',
                //i need to select a class called edge to apply some effects to it
                // 'hover:[&:not(:disabled)]:bg-gray-100 ',
                // 'focus:ring-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-offset-1',
                // 'disabled:bg-gray-300 disabled:text-primary-main disabled:cursor-not-allowed',
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
