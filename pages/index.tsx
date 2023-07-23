import { HomeTopSection } from '@/components/home-page-components/top-section';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OurStory from '@/components/home-page-components/our-story';
import OurChef from '@/components/home-page-components/our-chef';
import OurMenu from '@/components/home-page-components/our-menu';
import { useEffect } from 'react';
import { itemsGroup } from '@/constants/food';

export default function HomePage({ items }: any) {
    useEffect(() => {
        document.title = 'Home | Restaurant';
    }, []);

    return (
        <div className="bg-[#1C1917]">
            <HomeTopSection />
            <OurStory />
            <OurChef />
            <OurMenu items={items} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const items = itemsGroup;
    return {
        props: {
            items,
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
