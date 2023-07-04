import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cls = (...args: any[]) => clsx(twMerge(...args));
