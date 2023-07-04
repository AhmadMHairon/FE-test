

function HowDoWeHelpYouBuildYourWealth() {

    const items = [
        {
            title: "تقييم المعلومات",
            description: "نفهم أهدافك المستقبلية، ونقيّم وضعك المالي بمستوى المخاطر المحتملة."
        },
        {
            title: "التخطيط المالي",
            description: "نبني محفظتك وفق المعلومات التي زودتنا بها وبالمنتجات الاستثمارية المناسبة لها."
        },
        {
            title: "البدء بالاستثمار",
            description: "ننفّذ طلبات الاستثمار عبر شركائنا، ونقدّم لك تقريراً دورياً عن أداء محفظتك."
        },
        {
            title: "التحكم بالأموال",
            description: "بإمكانك التحكم بحريّة في أموالك؛ بسحب رأس المال المستثمر في أي وقت."
        }
    ]

    return (
        <div className="lg:h-[462px] max-w-7xl mx-auto text-center space-y-24">
            <h2>كيف نساعدك على بناء ثروتك؟</h2>
            <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-16 px-2.5">
                {items.map(({ title, description }) => (
                    <div key={title} className="flex flex-col justify-center bg-[#3E3E3E] h-64 w-72 p-2.5 space-y-5 rounded-md">
                        <h4>{title}</h4>
                        <p className="text-gray-400">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowDoWeHelpYouBuildYourWealth