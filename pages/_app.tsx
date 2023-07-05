import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/main-layout/main-layout';
import { LayoutGroup, MotionConfig } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';


function App({ Component, pageProps }: AppProps) {
    return (
        <LayoutGroup>
            <MotionConfig reducedMotion="user">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MotionConfig>
        </LayoutGroup>
    );
}

export default appWithTranslation(App);
