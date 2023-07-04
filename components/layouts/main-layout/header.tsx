import Image from "next/image"
import WafraDarkLogo from "@/components/assets/wafra-dark-logo.png"

function Header() {

    const navLinks = ["الصفحة الرئيسية", "محافظ الاستثمار", "استفسر أكثر"]

    return (
        <header className="flex justify-between items-center gap-28 py-8 max-w-7xl lg:mx-auto px-2.5">
            <Image src={WafraDarkLogo} alt="wafra-logo" className="h-10 sm:w-48 w-40" />
            <div className="hidden md:flex gap-20">
                {navLinks.map((navLink) => (
                    <p key={navLink}>{navLink}</p>
                ))}
            </div>
            <div className="hidden sm:block bg-primary px-5 py-2 rounded-lg cursor-pointer">
                تسجيل الدخول
            </div>
        </header>
    )
}

export default Header