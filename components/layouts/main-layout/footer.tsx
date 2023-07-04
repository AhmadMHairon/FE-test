import Image from "next/image"
import WafraDarkLogo from "@/components/assets/wafra-dark-logo.png"

function Footer() {

    const wafraItems = [
        "الرئيسية",
        "عن وفرة",
        "كيف ابدأ استثماري"
    ]

    const importantLinks = [
        "المدونة",
        "سياسة الخصوصية",
    ]

    return (
        <footer className="h-[514px] bg-[#2E2E2E]">
            <div className="max-w-7xl mx-auto py-16 space-y-14 px-5">
                <Image src={WafraDarkLogo} alt="wafra-logo" className="h-10 w-44" />
                <div className="flex items-start gap-20 sm:gap-40">
                    <div className="space-y-5">
                        <h6 className="text-xl">وفرة</h6>
                        {wafraItems.map((wafraItem) => (
                            <p className="text-gray-500 text-xl" key={wafraItem}>{wafraItem}</p>
                        ))}
                    </div>
                    <div className="space-y-5">
                        <h6 className="text-xl">روابط مهمة</h6>
                        {importantLinks.map((importantLink) => (
                            <p className="text-gray-500 text-xl" key={importantLink}>{importantLink}</p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer