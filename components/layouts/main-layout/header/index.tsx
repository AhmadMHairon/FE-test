import Image from 'next/image';
import yabaLogo from '@/assets/yaba-logo.svg';
import { Container } from '@/components/common/ui/container';
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
    const [activeLink, setActiveLink] = useState(header_links[0].href);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 56) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            const sections = document.querySelectorAll('section');

            let activeSection = header_links[0].href;
            sections.forEach((section, index) => {
                if (window.scrollY + 100 > section?.offsetTop) {
                    activeSection = header_links[index].href;
                }
            });
            setActiveLink(activeSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cls(
                `fixed top-0 inset-x-0 z-50 py-8 px-2.5 ${inter.className} transition-all`
            )}
            style={{
                background: isScrolled ? 'rgba(0, 0, 0, 0.23)' : '',
                boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '',
                backdropFilter: isScrolled ? 'blur(6.1px)' : '',
                WebkitBackdropFilter: isScrolled ? 'blur(6.1px)' : '',
            }}>
            <nav>
                <Container className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src={yabaLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden lg:flex gap-8 justify-between ">
                        {header_links.map((link, index) => {
                            const isHashLink = link.href.startsWith('#');
                            const href = !isHashLink
                                ? link.href
                                : link.page === router.pathname
                                ? link.href
                                : `${link.page}${link.href}`;

                            return (
                                <li
                                    onClick={() => {
                                        if (isHashLink) {
                                            const sections = document.querySelectorAll('section');
                                            window.scrollTo({
                                                top: sections[index]?.offsetTop - 99,
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                    className={`whitespace-nowrap relative font-semibold   transition-all text-nav hover:text-secondary-main flex flex-col after:content-[''] after:h-[2px] after:transition-all ${
                                        activeLink === href
                                            ? 'after:bg-secondary-main after:w-full text-secondary-main'
                                            : 'after:bg-primary-main after:w-0 text-primary-light/50'
                                    }  hover:after:w-full`}
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
                            <div className=" border-2" />
                        </div>

                        <Button as={NextLink} href="/sign-up" className="hidden lg:block">
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
