import Footer from './footer';
import Header from './header';
import { IBM_Plex_Sans_Arabic as IBMArabic } from 'next/font/google';
import { Fragment } from 'react';

type MainLayoutProps = {
    children: React.ReactNode;
    custom?: React.FC;
};

const arabicFont = IBMArabic({
    weight: ['400', '600'],
    display: 'swap',
    style: ['normal'],
    subsets: ['arabic'],
    preload: true,
});

function MainLayout({ children, custom }: MainLayoutProps) {
    const CustomLayout = custom || Fragment;

    return (
        <div className="w-full flex-1 flex flex-col justify-between" dir="rtl">
            <div>
                <style jsx global>{`
                    html {
                        font-family: ${arabicFont.style.fontFamily};
                    }
                `}</style>
            </div>
            {!custom && <Header />}
            <CustomLayout>
                <main>{children}</main>
            </CustomLayout>
            {!custom && <Footer />}
        </div>
    );
}

export default MainLayout;
