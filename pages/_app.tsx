import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import HomeLayout from '@/components/layouts/main-layout/main-layout';
import { AuthLayout } from '@/components/layouts/auth-layout';
import { LayoutGroup, MotionConfig } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()

    const Layout = pathname === "/" ? HomeLayout : AuthLayout

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
