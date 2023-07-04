import Mobile from "@/components/assets/mobile.png"
import Image from "next/image";
import Layer from "@/components/assets/Layer.png"

function YourInvestmentIsEasierWithWafra() {


    return (
        <div className="relative flex items-center lg:h-[597.77px] max-w-5xl mx-auto overflow-hidden px-2.5">
            <Image src={Layer} alt="layer" className="absolute z-50 top-24 -right-20 h-[430px] w-[400px]" />
            <div className="space-y-12 sm:w-1/2 text-center md:text-normal">
                <h1>استثمارك أسهل مع وفرة!</h1>
                <p className="text-gray-500">نضع خبرات الاستثمار بين يديك لتأمين مستقبلك المالي بأذكى التقنيات وأبسط الخطوات للاستثمار في السوق المحلي والعالمي. ابدأ استثمارك اليوم مع خدمة المستشار الآلي لبناء محفظة استثمارية تناسب أهدافك المالية بأقل رسوم إدارة استثمار.</p>
                <div className='w-fit py-2.5 px-10 bg-primary font-semibold text-xl rounded-md cursor-pointer mx-auto'>
                    استثمر معنا
                </div>
            </div>
            <div className="hidden sm:flex justify-center md:block w-1/2">
                <Image src={Mobile} alt="mobile" className="sm:h-96 sm:w-72 md:h-[597.77px] md:w-[501.3px]" />
            </div>
        </div>
    )
}

export default YourInvestmentIsEasierWithWafra