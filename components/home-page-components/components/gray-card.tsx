import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

type CardProps = {
    title: string;
    description: string;
};

export function GrayCard({ title, description }: CardProps) {
    const card = useRef(null);
    const inView = useInView(card, { amount: 'some', once: true });

    return (
        <motion.div
            initial={{ opacity: 0, y: 65 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            ref={card}
            className="shadow-lg relative card flex flex-col justify-center bg-[#F9FAFB] py-20 w-full px-4 space-y-5 rounded-md">
            <h4 className='font-bold text-2xl'>{title}</h4>
            <p className="text-gray-400 text-lg">{description}</p>
        </motion.div>
    )
}