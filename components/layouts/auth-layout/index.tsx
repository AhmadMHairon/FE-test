import Image from "next/image";
import Vector from "@/assets/vector.png"
import Vector2 from "@/assets/vector-2.png"
import Vector3 from "@/assets/vector-3.png"
import Vector4 from "@/assets/vector-4.png"
import WafraLogo from "@/assets/wafra-logo-light-mode.png"

type AuthLayout = {
    children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayout) {

    return (
        <div className="xl:flex relative xl:h-screen">
            <Image src={WafraLogo} alt="" className="absolute top-5 left-2.5 sm:left-5 lg:top-10 lg:left-20 h-7 w-24 sm:h-10 sm:w-40" />
            <div className="w-2/3 lg:w-1/2 h-full relative text-black font-bold text-white">
                <Image src={Vector} alt="" className="xl:h-screen w-full" />
                <Image src={Vector2} alt="" className="absolute top-0 xl:-top-16 xl:-left-20 2xl:left-0 2xl:-rotate-6" />
                <Image src={Vector3} alt="" className="absolute -bottom-20 left-14 lg:-bottom-24 lg:left-16 xl:bottom-0 xl:left-40" />
                <Image src={Vector4} alt="" className="absolute bottom-0 left-0 w-[918px]" />
                <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
                    <h1 className="relative bottom-20 right-14 sm:bottom-40 sm:right-28 lg:bottom-62 lg:right-28 text-xl sm:text-5xl 2xl:text-6xl">نمكّن أموالك</h1>
                    <h1 className="relative bottom-20 sm:bottom-32 sm:right-0 lg:bottom-32 lg:right-0 text-xl sm:text-5xl 2xl:text-6xl">ندير مستقبلك</h1>
                </div>
            </div>
            <div className="xl:w-1/2 h-full flex flex-col justify-center px-5 pt-40 pb-20 lg:pt-52 lg:pb-0 xl:pt-0 xl:pb-0 sm:px-20 xl:px-40">
                {children}
            </div>
        </div>
    )
}