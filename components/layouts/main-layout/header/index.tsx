import Image from 'next/image';
import yabaLogo from '@/assets/yaba-logo.svg';
import { Container } from '@/components/common/container';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { header_links } from './_links';
import { HeaderMenu } from './header-menu';
import { useEffect, useState } from 'react';
import { cls } from '@/utils/cls';
import { NextLink } from '@/components/common/link';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 56) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cls(
                `fixed top-0 inset-x-0 z-50 py-8 px-2.5 ${inter.className} transition-all`,
                isScrolled && 'backdrop-blur-sm'
            )}>
            <nav>
                <Container className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            priority
                            src={yabaLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden md:flex gap-8 justify-between ">
                        {header_links.map(link => {
                            const isHashLink = link.href.startsWith('#');
                            const href = !isHashLink
                                ? link.href
                                : link.page === router.pathname
                                ? link.href
                                : `${link.page}${link.href}`;

                            return (
                                <li
                                    className="font-semibold text-primary-light/50  transition-all text-nav hover:text-secondary-main"
                                    key={href}>
                                    <Link href={href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center text-primary-light">
                        <div className="px-4 divide-x-2 divide-primary-light flex">
                            <div className="h-[75%] px-4 cursor-pointer hover:text-secondary-main transition-all">
                                {' '}
                                En{' '}
                            </div>
                            <div className=" border-2"> </div>
                        </div>

                        <Button as={NextLink} href="/sign-up" className="hidden md:block">
                            Contact us
                        </Button>
                        <HeaderMenu />
                    </div>
                </Container>
            </nav>
        </header>
    );
}

export default Header;
