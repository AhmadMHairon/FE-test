import Image from 'next/image';
import wafraLogo from '@/assets/wafra-logo-light-mode.png';
import { Container } from '@/components/common/container';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { header_links } from './_links';
import { HeaderMenu } from './header-menu';

function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 py-8 px-2.5 bg-white">
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
                            const Comp = isHashLink ? 'a' : Link;

                            return (
                                <li className="font-semibold" key={link.href}>
                                    <Comp href={link.href}>{link.name}</Comp>
                                </li>
                            );
                        })}
                    </ul>
                    <Button className="hidden sm:block">سجّل اهتمامك</Button>

                    <HeaderMenu />
                </Container>
            </nav>
        </header>
    );
}

export default Header;
