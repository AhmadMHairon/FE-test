import { useRef } from 'react';
import { Container } from '../common/container';
import { useInView, motion } from 'framer-motion';
import { usePrettyCards } from '@/hooks/use-pretty-card';
import { GrayCard } from './components/gray-card';

const items = [
    {
        title: 'تسجيل الثروات',
        description: 'نفهم أهدافك المستقبلية، ونقيّم وضعك المالي بمستوى المخاطر المحتملة.',
    },
    {
        title: 'المستشار المالي',
        description:
            'نبني محفظتك وفق المعلومات التي زودتنا بها وبالمنتجات الاستثمارية المناسبة لها.',
    },
    {
        title: 'التخطيط المالي',
        description: 'ننفّذ طلبات الاستثمار عبر شركائنا، ونقدّم لك تقريراً دورياً عن أداء محفظتك.',
    },
    {
        title: 'المنتجات الاستثمارية',
        description: 'بإمكانك التحكم بحريّة في أموالك؛ بسحب رأس المال المستثمر في أي وقت.',
    },
];

export function BuildYourWealth() {
    const title = useRef(null);
    const cardsContainer = useRef(null);
    const inView = useInView(title, { amount: 'some', once: true });

    usePrettyCards(cardsContainer);

    return (
        <Container className="text-center space-y-24 mt-12 mb-32">
            <motion.h2
                initial={{ opacity: 0, y: 65 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                ref={title}
                className="font-bold sm:text-5xl text-3xl text-[#2E724C]">
                كيف نساعدك على بناء ثروتك؟
            </motion.h2>
            <div
                ref={cardsContainer}
                className="cards grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  px-2.5">
                {items.map((details, idx) => (
                    <GrayCard key={idx} {...details} />
                ))}
            </div>
        </Container>
    );
}