import leftPhone from '@/assets/left-phone.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';
import { Button } from '../common/button';
import { PhoneAnimation } from './phone-animation';

export function HomeTopSection() {
    return (
        <section id="about" className=" relative pt-32 pb-24 flex items-center min-h-screen mx-auto overflow px-2.5">
            
            <svg
                width="584"
                height="601"
                viewBox="0 0 584 601"
                fill="none"
                className="absolute right bottom-0 right-0 md:w-[584px] w-[292px] md:h-[601px] h-[300px]"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, ease: 'easeInOut' }}
                        d="M468.224 600.292H261.591V408.992L262 408.516L262.708 407.69H261.62H0.5V0.5H282.004V387.318V388.525L282.857 387.672L666.902 3.84654H866.045V202.994V407.69H665.521V404.315V403.108L664.668 403.961L468.224 600.292Z"
                        stroke="#55D48E"
                        strokeWidth={1}
                    />
                </g>
            </svg>
            <Container className="items-center grid md:grid-cols-2 gap-4 z-10">
                <div className="space-y-6 md:space-y-12 order-2 flex flex-col justify-center md:ltr:text-left md:rtl:text-right text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.25,
                            type: 'spring',
                            bounce: 0.25,
                            damping: 8,
                            stiffness: 100,
                        }}
                        className="font-bold sm:text-5xl text-3xl text-primary-dark">
                        ابنِ ثروتك المالية مع وفرة
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: 'spring', bounce: 0.25, damping: 8 }}
                        className="max-w-[670px] text-xl sm:text-2xl">
                        نوفر بين يديك أبسط الخطوات وأحدث التقنيات لتأمين مستقبلك المالي لإدارة ثروتك
                        وتنميتها بالاستثمار في السوق المحلي والعالمي، ابدأ إدارة ثروتك اليوم مع
                        مستشارين وخبراء لتحقيق أهدافك المالية.
                    </motion.p>
                    <div className="md:justify-start justify-center flex">
                        <Button
                            as={motion.button}
                            initial={{ opacity: 0, y: 65 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, type: 'spring', bounce: 0.25, damping: 8 }}
                            className="text-2xl w-[220px] py-3">
                            سجل اهتمامك
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center order-1 md:order-3 relative">
                <div className='absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[400px] h-[400px]  bg-[rgba(84,190,150,0.90)] backdrop-filter blur-[200px] rounded-full'/>

                    <div className="flex md:scale-100 scale-75 transform justify-center relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.65 }}
                            className="z-10 origin-bottom-right">
                            <PhoneAnimation />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, rotate: 10, x: 20 }}
                            animate={{ opacity: 1, rotate: 0, x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
                            className="-mr-32 origin-bottom-right">
                            <Image
                                alt=""
                                src={leftPhone}
                                width={350}
                                height={571}
                                priority
                                className="object-contain lg:w-[350px] w-[250px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
