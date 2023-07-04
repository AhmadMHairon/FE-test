import Image from 'next/image';
import WafraDarkLogo from '@/components/assets/wafra-dark-logo.png';
import { Container } from '@/components/common/container';
import Link from 'next/link';

function Footer() {
    const wafraItems = ['الرئيسية', 'عن وفرة', 'كيف ابدأ استثماري'];

    const importantLinks = ['المدونة', 'سياسة الخصوصية'];
    // <Image src={WafraDarkLogo} alt="wafra-logo" className="h-10 w-44" />

    return (
        <footer>
            <Container>
                <div className="flex items-center justify-between border-y py-7 border-white/50">
                    <Link href="/">
                        <Image
                            src={WafraDarkLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-10 w-44 object-contain"
                        />
                    </Link>

                    <div className='text-sm'>
                        social medai icons
                    </div>
                </div>
                <div className='text-center text-sm text-white/40 py-7'>
                    All rights reserved to Wafra @ {new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
