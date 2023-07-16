import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/container';
import mapImage from '@/assets/map.svg';
import yabaLogo from '@/assets/yaba-logo.svg';

function Footer() {
    return (
        <footer className="bg-primary-footer">
            <Container>
                <div className="grid md:grid-cols-6 grid-cols-5 justify-between py-7 pt-16 gap-3">
                    <Link href="/">
                        <Image
                            src={yabaLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            priority
                            className="h-10 w-44 object-contain"
                        />
                    </Link>
                    <div
                        className="grid gap-10 text-primary-light flex-1 col-span-4"
                        style={{
                            gridTemplateColumns: '1fr 1fr 1fr 2fr',
                        }}>
                        <div>Instagram</div>
                        <div>Menu</div>
                        <div>Contact us</div>
                        <div>Location</div>
                        <div>Facebook</div>
                        <div>Our Story</div>
                        <div>info@yabarest.com</div>
                        <div>Dubai, UAE</div>
                        <div />
                        <div>Our Chef</div>
                        <div>+971 58 583 0332</div>
                        <div>Jumeirah1, Wasl Vita Mall shop no. S31</div>
                    </div>
                    <div className="flex items-center col-span-2 md:col-span-1">
                        <Image src={mapImage} alt="" />
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
