import { cls } from '@/utils/cls';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '@/components/common/button';
import { Container } from '@/components/common/container';
import Link from 'next/link';
import Image from 'next/image';
import { header_links } from '@/components/yaba-components/constants/header_links';
import yabaLogo from '@/assets/yaba-logo.svg';
import { NextLink } from '@/components/common/link';
import { HeaderMenu } from '@/components/layouts/main-layout/header/header-menu';

const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

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
                            src={yabaLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden md:flex gap-8 justify-between text-white">
                        {header_links.map(link => {
                            const isHashLink = link.href.startsWith('#');
                            const href = !isHashLink
                                ? link.href
                                : link.page === router.pathname
                                ? link.href
                                : `${link.page}${link.href}`;

                            return (
                                <li className=" text-white font-semibold" key={href}>
                                    <Link className="" href={href}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <Button as={NextLink} href="/sign-up" className="hidden sm:block">
                            سجّل اهتمامك
                        </Button>
                    </div>

                    {/* <HeaderMenu /> */}
                </Container>
            </nav>
        </header>
    );
};

const CustomLayout = ({ children }: any) => {
    return (
        <div className="text-[#FAFAF9] font-medium " dir="ltr">
            <Header></Header>
            {children}
        </div>
    );
};

const YabaPage = () => {
    return <div className="h-screen w-screen bg-[#1C1917]"></div>;
};

export default YabaPage;

YabaPage.Layout = CustomLayout;
