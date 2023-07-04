function AdvantagesOfBuildingFinancialPortfolio() {

    const items = [
        {
            title: "خبراء لإدارة أموالك",
            description: "تنمو أموالك على أيدي خبراء مؤهلين لإدارتها، يفكرون بأفضل الاحتمالات المناسبة لخطتك ويقيمون أداءها بطريقة دورية تساعدك على الربح."
        },
        {
            title: "خطط مالية خاصة بك",
            description: "لأن كل مرحلة لها أهدافها المالية الخاصة، نبني خطتك المالية في كل فترة من حياتك حسب التفضيلات والقدرات المناسبة لتتمتع بحرية مالية بعد التقاعد."
        },
        {
            title: "منتجات متنوعة",
            description: "نختار لك المنتجات الاستثمارية التي تناسب أهدافك، وتتماشى مع قدرتك ورغبتك بالمخاطرة لتحصيل العوائد وفق الفترة الزمنية المخصصة لخطتك."
        }
    ]

    return (
        <div className='bg-[#2E2E2E] text-center mx-auto p-10 lg:p-0'>
            <div className="flex flex-col justify-center lg:h-[1031px] space-y-16">
                <h2>مزايا بناء المحفظة المالية</h2>
                <h5 className="lg:w-[550px] mx-auto text-gray-400">درسنا السوق الاستثماري و التحديات التي يواجهها أصحاب رؤوس الاموال العالية ، و صممنا الخدمات التي تحتاجها لإدارة أموالك بتكلفة منخفضة و آلية سهلة و استراتيجيات مرنة</h5>
                <div className="lg:flex justify-center grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-10 lg:gap-16 px-2.5">
                    {items.map(({ title, description }) => (
                        <div key={title} className="flex flex-col justify-center bg-[#3E3E3E] h-[367px] lg:w-96 p-2.5 space-y-5 rounded-md">
                            <h4>{title}</h4>
                            <p className="text-gray-400">{description}</p>
                        </div>
                    ))}
                </div>
                <div className='w-fit py-2.5 px-10 mx-auto bg-primary font-bold text-xl rounded-md cursor-pointer'>
                    ابنِ خطتك الآن
                </div>
            </div>
        </div>
    )
}

export default AdvantagesOfBuildingFinancialPortfolio