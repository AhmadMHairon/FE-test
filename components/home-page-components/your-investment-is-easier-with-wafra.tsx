import Mobile from "@/components/assets/mobile.png"
import Image from "next/image";
import Layer from "@/components/assets/Layer.png"

function YourInvestmentIsEasierWithWafra() {


    return (
        <div className="relative flex items-center h-[597.77px] max-w-5xl mx-auto">
            <Image src={Layer} alt="layer" className="absolute z-50 top-24 -right-16 h-[430px] w-[400px]" />
            <div className="space-y-12 w-1/2">
                <h1>استثمارك أسهل مع وفرة!</h1>
                <p className="text-gray-500">نضع خبرات الاستثمار بين يديك لتأمين مستقبلك المالي بأذكى التقنيات وأبسط الخطوات للاستثمار في السوق المحلي والعالمي. ابدأ استثمارك اليوم مع خدمة المستشار الآلي لبناء محفظة استثمارية تناسب أهدافك المالية بأقل رسوم إدارة استثمار.</p>
                <div className='w-fit py-2.5 px-10 bg-primary font-semibold text-xl rounded-md cursor-pointer mx-auto'>
                    استثمر معنا
                </div>
            </div>
            <div className="w-1/2">
                <Image src={Mobile} alt="mobile" className="h-[597.77px] w-[501.3px]" />
            </div>
        </div>
    )
}

export default YourInvestmentIsEasierWithWafra