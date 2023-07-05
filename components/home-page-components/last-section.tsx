import { useRef } from 'react';
import { cls } from '@/utils/cls';
import { Button } from '../common/button';
import { Container } from '../common/container';
import { useInView, motion } from 'framer-motion';

const layers = [
    {
        imageClassName: 'h-[900px] w-[568px]',
        divClassName: '-right-[500px] sm:-right-96 lg:-right-96 xl:-right-60 2xl:right-10 -top-40',
    },
    {
        imageClassName: 'lg:h-[388px] w-[436px]',
        divClassName:
            'object-contain -right-72 sm:right-20 lg:right-20 xl:right-52 2xl:right-[450px] -top-28',
    },
    {
        imageClassName: 'lg:h-[430px] w-[482px]',
        divClassName: 'object-contain -left-80 sm:-left-60 lg:-left-10 2xl:left-0 -top-40',
    },
    {
        imageClassName: 'lg:h-[402px] w-[450px]',
        divClassName: 'object-contain -left-80 sm:-left-60 lg:-left-16 2xl:-left-10 -bottom-20',
    },
];

export function LastSection() {
    const title = useRef(null);
    const inView = useInView(title, { amount: 'some', once: true });

    return (
        <Container className="relative flex flex-col justify-center items-center h-[431px] mx-auto mb-20 space-y-8 bg-[#4CBE7F] text-center rounded-lg text-gray-100 overflow-hidden">
            {layers.map(({ divClassName, imageClassName }, index) => (
                <div
                    key={index}
                    className={cls('absolute', divClassName)}>
                    <svg
                        width="454"
                        height="406"
                        viewBox="0 0 454 406"
                        fill="none"
                        className={imageClassName}
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M235.516 2.98336C277.141 5.02388 317.785 11.5967 353.878 32.4954C393.316 55.3316 436.119 82.5272 448.705 126.426C461.186 169.959 435.44 213.627 417.757 255.306C401.669 293.224 384.207 331.097 351.364 355.853C318.168 380.877 276.691 387.286 235.516 392.678C188.025 398.897 134.996 416.384 95.3898 389.373C55.6395 362.263 55.6497 305.227 40.2939 259.537C24.7183 213.194 -8.27045 167.844 5.13272 120.822C18.6416 73.4294 64.6621 42.8554 108.44 20.4636C147.484 0.492601 191.74 0.837406 235.516 2.98336Z"
                            stroke="white"
                            strokeOpacity="0.15"
                            strokeWidth="3"
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={inView ? { pathLength: 1, pathOffset: 0 } : {}}
                            transition={{ duration: 1.2, delay: index * 0.35, ease: 'easeInOut' }}
                        />
                    </svg>
                </div>
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
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}>
                ابنِ محفظتك خلال ثوانٍ لتٌنمّ مواردك المالية ، و تؤمن مستقبلك و مستقبل عائلتك
            </motion.p>
            <Button
                as={motion.button}
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, type: 'spring', bounce: 0.25, damping: 8 }}
                className="text-2xl w-[220px] z-10 py-3 ring-offset-primary-main"
                color="secondary">
                سجّل اهتمامك
            </Button>
        </Container>
    );
}
