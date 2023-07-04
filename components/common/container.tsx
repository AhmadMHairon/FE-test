import { cls } from '@/utils/cls';

interface Props
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

export const Container = ({ children, className, ...props }: Props) => {
    return (
        <div className={cls('container mx-auto px-4', className)} {...props}>
            {children}
        </div>
    );
};
