import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Img1 from '@/assets/img-1.svg';
import Img2 from '@/assets/img-2.svg';
import Img3 from '@/assets/img-3.svg';
import Img4 from '@/assets/img-4.svg';
import { Container } from '../common/container';

const OurStory = () => {
    const title = useRef<HTMLHeadingElement>(null);

    const inView = useInView(title, { amount: 'some', once: true });
    return (
        <section id="about" className=" flex flex-col lg:mt-14 mt-0 ">
            <Container className="items-center grid lg:grid-cols-2 gap-4 z-10 flex-1 ">
                <div className="space-y-6 lg:space-y-12 order-2 flex flex-col justify-center pt-16 lg:pt-32 pb-24 lg:px-20 px-10 ">
                    <motion.h1
                        ref={title}
                        initial={{ opacity: 0, y: 65 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.25,
                            type: 'spring',
                            bounce: 0.25,
                            damping: 8,
                            stiffness: 100,
                        }}
                        className="font-bold sm:text-title text-minTitle sm:leading-title leading-minTitle text-secondary-main">
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 65 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, type: 'spring', bounce: 0.25, damping: 8 }}
                        className="max-w-[670px]  text-primary-desc sm:text-desc text-minDesc sm:leading-desc leading-minDesc">
                        {'"Yaba" '}made its debut as the {"world's"} pioneering modern Iraqi
                        restaurant In 2022. With our innovative approach, we reimagine traditional
                        Iraqi cuisine into a multi-dimensional culinary experience. Inspired by the
                        ancient civilizations of Iraq, our culinary creations pay homage to the rich
                        heritage of the region. By seamlessly blending history with contemporary
                        elements, {'"Yaba"'} emerges as a remarkable bridge connecting the realms of
                        antiquity and modernity.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.75, type: 'spring', bounce: 0.25, damping: 8 }}
                    className="grid grid-cols-2 justify-center gap-10 order-3 lg:order-1 h-full w-full relative px-10">
                    <div
                        className="grid gap-10 flex-col"
                        style={{
                            gridTemplateRows: '1fr 1fr',
                        }}>
                        <div className=" ">
                            <Image
                                alt=""
                                src={Img1}
                                priority
                                className="h-full w-full overflow-hidden object-cover"
                            />
                        </div>
                        <div className="">
                            <Image
                                alt=""
                                src={Img2}
                                priority
                                className="h-full w-full overflow-hidden object-cover"
                            />
                        </div>
                    </div>
                    <div
                        className="pt-6 grid gap-10 flex-col"
                        style={{
                            gridTemplateRows: '1fr 1fr',
                        }}>
                        <div className="">
                            <Image
                                alt=""
                                src={Img3}
                                priority
                                className="h-full w-full overflow-hidden object-cover"
                            />
                        </div>
                        <div className="">
                            <Image
                                alt=""
                                src={Img4}
                                priority
                                className="h-full w-full overflow-hidden object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default OurStory;
