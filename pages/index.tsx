import { HomeTopSection } from '@/components/home-page-components/top-section';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OurStory from '@/components/home-page-components/our-story';
import OurChef from '@/components/home-page-components/our-chef';
import OurMenu from '@/components/home-page-components/our-menu';
import { itemsGroup } from '@/constants/food';
import Head from 'next/head';

export default function HomePage({ items }: any) {
    return (
        <div>
            <Head>
                <title>Yaba - Authentic Iraqi Restaurant</title>
                <meta
                    name="description"
                    content="Welcome to Yaba - A Taste of Iraq! Indulge in the rich flavors of authentic Iraqi cuisine. Our restaurant offers a delectable selection of traditional dishes, from aromatic kebabs and savory biryanis to mouthwatering falafels and refreshing salads. Come and experience the warmth of Iraqi hospitality and savor the deliciousness of our cultural delights. Book a table now and embark on a culinary journey to the heart of Iraq at Yaba Restaurant."
                />
                <meta name="title" content="Yaba - Authentic Iraqi Restaurant" />

                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Yaba, Iraqi food, Iraqi restaurant, authentic cuisine, kebabs, biryanis, falafels, Middle Eastern food, cultural delights"
                />
                <meta name="author" content="Ahmad" />
                <meta
                    name="og:description"
                    content="Welcome to Yaba - A Taste of Iraq! Indulge in the rich flavors of authentic Iraqi cuisine. Our restaurant offers a delectable selection of traditional dishes, from aromatic kebabs and savory biryanis to mouthwatering falafels and refreshing salads. Come and experience the warmth of Iraqi hospitality and savor the deliciousness of our cultural delights. Book a table now and embark on a culinary journey to the heart of Iraq at Yaba Restaurant."
                />
                <meta property="og:title" content="Yaba - Authentic Iraqi Restaurant" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Yaba - Authentic Iraqi Restaurant" />
                <meta
                    name="twitter:description"
                    content="Welcome to Yaba - A Taste of Iraq! Indulge in the rich flavors of authentic Iraqi cuisine. Our restaurant offers a delectable selection of traditional dishes, from aromatic kebabs and savory biryanis to mouthwatering falafels and refreshing salads. Come and experience the warmth of Iraqi hospitality and savor the deliciousness of our cultural delights. Book a table now and embark on a culinary journey to the heart of Iraq at Yaba Restaurant."
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>

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
