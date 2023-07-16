import { LastSection } from '@/components/home-page-components/last-section';
import { BuildYourWealth } from '@/components/home-page-components/build-your-wealth';
import { FeaturesSection } from '@/components/home-page-components/features-section';
import { HomeTopSection } from '@/components/home-page-components/top-section';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OurStory from '@/components/home-page-components/out-story';
import OurChef from '@/components/home-page-components/our-chef';
import OurMenu from '@/components/home-page-components/our-menu';

export default function HomePage() {
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
