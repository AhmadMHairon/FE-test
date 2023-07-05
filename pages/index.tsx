import { LastSection } from '@/components/home-page-components/last-section';
import { BuildYourWealth } from '@/components/home-page-components/build-your-wealth';
import { FeaturesSection } from '@/components/home-page-components/features-section';
import { HomeTopSection } from '@/components/home-page-components/top-section';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomePage() {
    
    return (
        <div>
            <HomeTopSection />
            <BuildYourWealth />
            <FeaturesSection />
            <LastSection />
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
