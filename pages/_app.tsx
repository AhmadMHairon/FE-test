import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/main-layout/main-layout';
import { LayoutGroup, MotionConfig } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
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
