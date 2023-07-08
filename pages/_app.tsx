import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/main-layout/main-layout';
import { LayoutGroup, MotionConfig } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';

const queryClient = new QueryClient();

type AppModifiedProps = AppProps & {
    Component: {
        Layout: React.FC;
    };
};

function App({ Component, pageProps }: AppModifiedProps) {
    const CustomLayout = Component.Layout;

    return (
        <QueryClientProvider client={queryClient}>
            <LayoutGroup>
                <MotionConfig reducedMotion="user">
                    <Layout custom={CustomLayout}>
                        <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            {/* ! disable follow and index just for initial release */}
                            <meta name="robots" content="noindex, nofollow" />
                            <meta name="googlebot" content="noindex, nofollow" />
                            <meta name="googlebot-news" content="noindex, nofollow" />
                            <meta name="googlebot-image" content="noindex, nofollow" />
                            <meta name="bingbot" content="noindex, nofollow" />
                        </Head>
                        <Toaster />
                        <Component {...pageProps} />
                    </Layout>
                </MotionConfig>
            </LayoutGroup>
        </QueryClientProvider>
    );
}

export default appWithTranslation(App);
