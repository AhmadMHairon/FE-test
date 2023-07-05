import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/main-layout/main-layout';
import { MotionConfig } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MotionConfig reducedMotion="user">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MotionConfig>
    );
}
