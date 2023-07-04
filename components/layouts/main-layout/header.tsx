import Image from 'next/image';
import WafraDarkLogo from '@/components/assets/wafra-dark-logo.png';
import { Container } from '@/components/common/container';
import Link from 'next/link';

const navLinks = ['الصفحة الرئيسية', 'محافظ الاستثمار', 'استفسر أكثر'];

function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-[#1E1E1E] py-8 px-2.5">
            <nav>
                <Container className="flex items-start justify-between">
                    <Link href="/">
                        <Image
                            priority
                            src={WafraDarkLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 sm:w-48 w-40 object-contain"
                        />
                    </Link>
                    <ul className="hidden md:flex gap-8 justify-between">
                        {navLinks.map(navLink => (
                            <li key={navLink}>{navLink}</li>
                        ))}
                    </ul>
                    <div className="hidden md:block bg-primary px-5 py-2 rounded-lg cursor-pointer">
                        تسجيل الدخول
                    </div>
                    {/* To be done */}
                    <button aria-label="menu" className="block md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
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
        </header>
    );
}

export default Header;
