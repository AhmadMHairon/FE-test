import { Button } from '../common/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-section-image.png';
import { useRef } from 'react';
import { Container } from '../common/container';
import Link from 'next/link';
export function HomeTopSection() {
    const title = useRef<HTMLHeadingElement>(null);

    return (
        <section id="about" className=" min-h-screen flex flex-col overflow-hidden relative ">
            <div className=" absolute w-full  z-1  h-full grid grid-cols-2">
                <div></div>
                <div className="flex justify-center order-1 lg:order-3 absolute h-full w-full lg:relative ">
                    <Image alt="" src={heroImage} priority fill={true} className=" object-cover" />
                </div>
            </div>
            <Container className="items-center grid lg:grid-cols-2 gap-4 z-10 flex-1 ">
                <div className="space-y-6 lg:space-y-12 order-2 flex flex-col justify-center pt-32 pb-24 px-20 z-10 ">
                    <motion.h1
                        ref={title}
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.25,
                            type: 'spring',
                            bounce: 0.25,
                            damping: 8,
                            stiffness: 100,
                        }}
                        className="font-bold  sm:text-mainTitle text-minMainTitle sm:leading-mainTitle leading-minMainTitle  text-primary-light">
                        Discover a New Dimension in Iraqi Cuisine
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: 'spring', bounce: 0.25, damping: 8 }}
                        className="max-w-[670px] sm:text-desc text-minDesc sm:leading-desc leading-minDesc text-primary-desc ">
                        We infuse our dishes with a non-traditional approach, adding a unique
                        dimension to Iraqi cuisine. Drawing inspiration from the ancient
                        civilizations of Iraq, our culinary creations serve as a bridge between
                        history and modernity, establishing {'"Yaba"'} as the embodiment of this
                        connection.
                    </motion.p>
                    <motion.div
                        className="justify-start flex gap-3 flex-col sm:flex-row"
                        style={{
                            marginTop: '4rem',
                        }}
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, type: 'spring', bounce: 0.25, damping: 8 }}>
                        <Button
                            as={Link}
                            href="/menu"
                            size={'medium'}
                            className="text-2xl text-center w-[220px] py-3">
                            View menu
                        </Button>
                        <Button
                            color={'secondary'}
                            size={'medium'}
                            className="text-2xl text-center w-[220px] py-3">
                            Contact us
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
