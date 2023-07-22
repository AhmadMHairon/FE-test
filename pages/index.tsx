import { HomeTopSection } from '@/components/home-page-components/top-section';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OurStory from '@/components/home-page-components/out-story';
import OurChef from '@/components/home-page-components/our-chef';
import OurMenu from '@/components/home-page-components/our-menu';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Home | Restaurant';
    }, []);

    return (
        <div className="bg-[#1C1917]">
            <HomeTopSection />
            <OurStory />
            <OurChef />
            <OurMenu />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
