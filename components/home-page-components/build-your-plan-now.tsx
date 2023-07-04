import { useRef } from 'react';
import { Container } from '../common/container';
import { useInView, motion } from 'framer-motion';

export function BuildYourPlanNow() {
    const title = useRef(null);

    const inView = useInView(title, { amount: 'some', once: true });

    return (
        <Container className="flex flex-col justify-center h-[431px] mx-auto mb-20 space-y-8 bg-[#2E2E2E] text-center rounded-lg">
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
                className="text-[#1AAC5B]">
                ابنِ محفظتك خلال ثوانٍ لتٌنمّ مواردك المالية ، و تؤمن مستقبلك و مستقبل عائلتك
            </motion.p>
            {/* To be done as a button */}
            {/* <div className="w-fit py-2.5 px-10 mx-auto bg-gray-300 text-gray-800 font-bold text-xl rounded-md cursor-pointer">
                ابنِ خطتك الآن
            </div> */}
        </Container>
    );
}
