import { useRef } from 'react';
import Image from 'next/image';
import { cls } from '@/utils/cls';
import { Button } from '../common/button';
import { Container } from '../common/container';
import { useInView, motion } from 'framer-motion';
import Vector from "@/components/assets/vector.png"
import HalfVector from "@/components/assets/half-vector.png"

const layers = [
    {
        imageClassName: "h-[900px] w-[568px]",
        divClassName: "-right-[500px] sm:-right-96 lg:-right-96 xl:-right-60 2xl:right-10 -top-40"
    },
    {
        imageClassName: "lg:h-[388px] w-[436px]",
        divClassName: "object-contain -right-72 sm:right-20 lg:right-20 xl:right-52 2xl:right-[450px] -top-28"
    },
    {
        imageClassName: "lg:h-[430px] w-[482px]",
        divClassName: "object-contain -left-80 sm:-left-60 lg:-left-10 2xl:left-0 -top-40"
    },
    {
        imageClassName: "lg:h-[402px] w-[450px]",
        divClassName: "object-contain -left-80 sm:-left-60 lg:-left-16 2xl:-left-10 -bottom-20"
    },
]

export function LastSection() {
    const title = useRef(null);
    const inView = useInView(title, { amount: 'some', once: true });

    return (
        <Container className="relative flex flex-col justify-center items-center h-[431px] mx-auto mb-20 space-y-8 bg-[#4CBE7F] text-center rounded-lg text-gray-100 overflow-hidden">
            {layers.map(({ divClassName, imageClassName }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.65 }}
                    className={cls("absolute", divClassName)}
                >
                    <Image src={index === 0 ? HalfVector : Vector} alt='' className={imageClassName} />
                </motion.div>
            ))}
            <motion.h2
                initial={{ opacity: 0, y: 65 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                ref={title}
                className="font-bold sm:text-5xl text-3xl">
                وفرتك المالية تبدأ من بناء خطتك المالية الخاصة
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 65 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
            >
                ابنِ محفظتك خلال ثوانٍ لتٌنمّ مواردك المالية ، و تؤمن مستقبلك و مستقبل عائلتك
            </motion.p>
            <Button
                as={motion.button}
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, type: 'spring', bounce: 0.25, damping: 8 }}
                className="text-2xl w-[220px] py-3"
                color="secondary">
                سجّل اهتمامك
            </Button>
        </Container>
    );
}
