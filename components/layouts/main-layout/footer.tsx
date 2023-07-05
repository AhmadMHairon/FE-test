import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import TwiiterIcon from "@/assets/twitter-icon.svg"
import LinkedinIcon from "@/assets/linkedin-icon.svg"
import InstagramrIcon from "@/assets/instagram-icon.svg"
import WafraDarkLogo from '@/assets/wafra-logo-light-mode.png';

function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex items-center justify-between border-t-2 py-7 border-primary-main">
                    <Link href="/">
                        <Image
                            src={WafraDarkLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            priority
                            className="h-10 w-44 object-contain"
                        />
                    </Link>
                    <div className='flex items-center gap-5'>
                        <Image src={LinkedinIcon} alt='' className='h-8 w-8' />
                        <Image src={InstagramrIcon} alt='' className='h-8 w-8' />
                        <Image src={TwiiterIcon} alt='' className='h-8 w-8' />
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
