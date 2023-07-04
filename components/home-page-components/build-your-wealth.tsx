import { useRef } from 'react';
import { Container } from '../common/container';
import { useInView, motion } from 'framer-motion';
import { usePrettyCards } from '@/hooks/use-pretty-card';
const items = [
    {
        title: 'تقييم المعلومات',
        description: 'نفهم أهدافك المستقبلية، ونقيّم وضعك المالي بمستوى المخاطر المحتملة.',
    },
    {
        title: 'التخطيط المالي',
        description:
            'نبني محفظتك وفق المعلومات التي زودتنا بها وبالمنتجات الاستثمارية المناسبة لها.',
    },
    {
        title: 'البدء بالاستثمار',
        description: 'ننفّذ طلبات الاستثمار عبر شركائنا، ونقدّم لك تقريراً دورياً عن أداء محفظتك.',
    },
    {
        title: 'التحكم بالأموال',
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
                className="font-bold sm:text-5xl text-3xl">
                كيف نساعدك على بناء ثروتك؟
            </motion.h2>
            <div
                ref={cardsContainer}
                className="cards grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  px-2.5">
                {items.map((details, idx) => (
                    <Card key={idx} {...details} />
                ))}
            </div>
        </Container>
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
            className="card flex relative flex-col justify-center bg-[#3E3E3E] h-64 px-6 space-y-5 rounded-md">
            <h4 className='text-2xl font-bold'>{title}</h4>
            <p className="text-white/50 text-lg">{description}</p>
        </motion.div>
    );
};
