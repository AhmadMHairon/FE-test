import Image from "next/image"
import WafraDarkLogo from "@/components/assets/wafra-dark-logo.png"

function Header() {

    const navLinks = ["الصفحة الرئيسية", "محافظ الاستثمار", "استفسر أكثر"]

    return (
        <header className="flex items-center gap-28 py-8 max-w-7xl mx-auto">
            <Image src={WafraDarkLogo} alt="wafra-logo" className="h-10 w-48" />
            <div className="flex gap-20">
                {navLinks.map((navLink) => (
                    <p key={navLink}>{navLink}</p>
                ))}
            </div>
            <div className="bg-primary px-5 py-2 rounded-lg cursor-pointer">
                تسجيل الدخول
            </div>
        </header>
    )
}

export default Header