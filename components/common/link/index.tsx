import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type LinkType = React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
        LinkProps & {
            children?: React.ReactNode;
        } & React.RefAttributes<HTMLAnchorElement>
>;

export const NextLink = (({ children, ...props }) => {
    const { locale } = useRouter();

    return (
        <Link {...props} locale={locale}>
            {children}
        </Link>
    );
}) as LinkType;
