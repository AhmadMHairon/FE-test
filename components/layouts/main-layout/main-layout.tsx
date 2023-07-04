import Footer from "./footer";
import Header from "./header";

type MainLayoutProps = {
    children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {

    return (
        <div className="bg-[#1E1E1E] w-full flex flex-col justify-between text-white" dir="rtl">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout