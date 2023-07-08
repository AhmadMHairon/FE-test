import Image from 'next/image';
import wafraLogo from '@/assets/wafra-logo-light-mode.png';
import { Container } from '@/components/common/container';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { header_links } from './_links';
import { HeaderMenu } from './header-menu';
import { useEffect, useState } from 'react';
import { cls } from '@/utils/cls';
import { NextLink } from '@/components/common/link';
import { useRouter } from 'next/router';

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
        <header className={cls('fixed top-0 inset-x-0 z-50 py-8 px-2.5', isScrolled && 'bg-white')}>
            <nav>
                <Container className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            priority
                            src={wafraLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden md:flex gap-8 justify-between">
                        {header_links.map(link => {
                            const isHashLink = link.href.startsWith('#');
                            const href = !isHashLink
                                ? link.href
                                : link.page === router.pathname
                                ? link.href
                                : `${link.page}${link.href}`;

                            return (
                                <li className="font-semibold" key={href}>
                                    <Link href={href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Button as={NextLink} href="/sign-up" className="hidden sm:block">
                        سجّل اهتمامك
                    </Button>
                    <HeaderMenu />
                </Container>
            </nav>
        </header>
    );
}

export default Header;
