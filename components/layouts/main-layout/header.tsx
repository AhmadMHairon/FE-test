import Image from 'next/image';
import WafraLogo from '@/components/assets/wafra-logo-light-mode.png';
import { Container } from '@/components/common/container';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { Sidebar } from '@/components/common/sidebar';
import { useState } from "react"

const navLinks = ['عن وفرة', 'كيف تبني ثروتك', 'لماذا وفرة'];

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    return (
        <header className="fixed top-0 inset-x-0 z-50 py-8 px-2.5 bg-white">
            <nav>
                <Container className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            priority
                            src={WafraLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden md:flex gap-8 justify-between">
                        {navLinks.map(navLink => (
                            <li className='font-semibold' key={navLink}>{navLink}</li>
                        ))}
                    </ul>
                    <Button className='hidden sm:block'>
                        سجّل اهتمامك
                    </Button>
                    <button aria-label="menu" className="block md:hidden" onClick={() => setSidebarOpen(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </Container>
            </nav>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
                <div className='pt-5 divide-y-2 divide-gray-200 space-y-5'>
                    <Link href="/">
                        <Image
                            priority
                            src={WafraLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-9 w-40 object-contain px-2.5"
                        />
                    </Link>
                    <div className='pt-5 px-5 space-y-5'>
                        <ul className="space-y-5">
                            {navLinks.map(navLink => (
                                <li className='font-semibold' key={navLink}>{navLink}</li>
                            ))}
                        </ul>
                        <div>
                            <Link href="/" className='font-semibold'>
                                سجّل اهتمامك
                            </Link>
                        </div>
                    </div>

                </div>

            </Sidebar>
        </header>
    );
}

export default Header;
