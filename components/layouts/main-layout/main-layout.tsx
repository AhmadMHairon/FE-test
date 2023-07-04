import { cls } from '@/utils/cls';
import Footer from './footer';
import Header from './header';
import { IBM_Plex_Sans_Arabic as IBMArabic } from 'next/font/google';

type MainLayoutProps = {
    children: React.ReactNode;
};

const arabicFont = IBMArabic({
    weight: ['400', '600'],
    display: 'swap',
    style: ['normal'],
    subsets: ['arabic'],
    preload: true,
});

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div
            className={cls('w-full flex flex-col justify-between text-white', arabicFont.className)}
            dir="rtl">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
