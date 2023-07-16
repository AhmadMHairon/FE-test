import Footer from './footer';
import Header from './header';
import { Fragment } from 'react';

type MainLayoutProps = {
    children: React.ReactNode;
    custom?: React.FC;
};

function MainLayout({ children, custom }: MainLayoutProps) {
    const CustomLayout = custom || Fragment;

    return (
        <div className=" w-full flex-1 flex flex-col justify-between bg-primary-main ">
            {!custom && <Header />}
            <CustomLayout>
                <main className="">{children}</main>
            </CustomLayout>
            {!custom && <Footer />}
        </div>
    );
}

export default MainLayout;
