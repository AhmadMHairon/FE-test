import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../common/container';
import { usePrettyCards } from '@/hooks/use-pretty-card';
import { Button } from '../common/button';

const items = [
    {
        title: 'خبراء لإدارة أموالك',
        description:
            'تنمو أموالك على أيدي خبراء مؤهلين لإدارتها، يفكرون بأفضل الاحتمالات المناسبة لخطتك ويقيمون أداءها بطريقة دورية تساعدك على الربح.',
    },
    {
        title: 'خطط مالية خاصة بك',
        description:
            'لأن كل مرحلة لها أهدافها المالية الخاصة، نبني خطتك المالية في كل فترة من حياتك حسب التفضيلات والقدرات المناسبة لتتمتع بحرية مالية بعد التقاعد.',
    },
    {
        title: 'منتجات متنوعة',
        description:
            'نختار لك المنتجات الاستثمارية التي تناسب أهدافك، وتتماشى مع قدرتك ورغبتك بالمخاطرة لتحصيل العوائد وفق الفترة الزمنية المخصصة لخطتك.',
    },
];
export function FeaturesSection() {
    const title = useRef(null);
    const cardsContainer = useRef(null);

    const inView = useInView(title, { amount: 'some', once: true });

    usePrettyCards(cardsContainer);

    return (
        <div className="bg-[#2E2E2E] text-center mx-auto py-16 mb-48">
            <Container className="flex flex-col justify-center space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    ref={title}
                    className="font-bold sm:text-5xl text-3xl">
                    مزايا بناء المحفظة المالية
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
                    className="sm:text-2xl max-w-[750px] text-xl mx-auto text-white/60">
                    درسنا السوق الاستثماري و التحديات التي يواجهها أصحاب رؤوس الاموال العالية ، و
                    صممنا الخدمات التي تحتاجها لإدارة أموالك بتكلفة منخفضة و آلية سهلة و استراتيجيات
                    مرنة
                </motion.p>
                <div ref={cardsContainer} className="cards lg:flex justify-center grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-2.5">
                    {items.map((details, idx) => (
                        <Card {...details} key={idx} />
                    ))}
                </div>
                <div>
                <Button size="large">
                    ابن محفظتك الآن
                </Button>
                </div>
            </Container>
        </div>
    );
}

type CardProps = {
    title: string;
    description: string;
};

const Card = ({ title, description }: CardProps) => {
    const card = useRef(null);
    const inView = useInView(card, { amount: 'some', once: true });

    return (
        <motion.div
            initial={{ opacity: 0, y: 65 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            ref={card}
            className="relative card flex flex-col justify-center bg-[#3E3E3E] py-20 w-full px-4 space-y-5 rounded-md">
            <h4 className='font-bold text-2xl'>{title}</h4>
            <p className="text-white/50 text-lg">{description}</p>
        </motion.div>
    );
};
