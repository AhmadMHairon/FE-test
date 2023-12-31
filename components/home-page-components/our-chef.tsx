import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import chefImage from '@/assets/chef-image.svg';
import { useRef } from 'react';
import { Container } from '../common/ui/container';

const OurChef = () => {
    const title = useRef<HTMLHeadingElement>(null);
    const inView = useInView(title, { amount: 'some', once: true });

    return (
        <section id="about" className=" min-h-[70vh] flex flex-col ">
            <Container className="items-center grid lg:grid-cols-2 gap-4 z-10 flex-1 ">
                <div className="space-y-6 lg:space-y-12 order-1 flex flex-col justify-center pt-16 lg:pt-32 pb-24 lg:px-20 px-10 z-10 ">
                    <motion.h1
                        ref={title}
                        initial={{ opacity: 0, x: 70 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            delay: 0.25,
                            type: 'spring',
                            bounce: 0.25,
                            damping: 8,
                            stiffness: 100,
                        }}
                        className="font-bold  text-secondary-main
                        sm:text-title text-minTitle sm:leading-title leading-minTitle
                        ">
                        Our Chef
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, type: 'spring', bounce: 0.25, damping: 8 }}
                        className="text-xl   text-primary-desc space-y-5 
                        sm:text-desc text-minDesc sm:leading-desc leading-minDesc
                        
                        ">
                        <p>
                            Chef Shaheen, a multi-talented individual who wears many hats in the
                            culinary world. Not only is he a celebrity chef, but {"he's"} also an
                            architect, recipe developer, and content creator on social media.
                            Additionally, he is the proud owner of the renowned {'"YABA"'}{' '}
                            restaurant, which has revolutionized Iraqi cuisine.
                        </p>
                        <p>
                            Chef {"Shaheen's"} culinary journey took him to the prestigious stage of
                            Master Chef UK, where he showcased the flavors of Iraq and the Middle
                            East with a contemporary twist, ultimately making it to the finals. His
                            dishes are meticulously crafted with finesse, bearing his unique
                            creative touch.
                        </p>
                        <p>
                            To further share his innovative approach to cooking, Chef Shaheen
                            ventured into the world of entrepreneurship and opened his first
                            restaurant, {'"YABA,"'} in Dubai. Here, visitor have the opportunity to
                            indulge in a fusion of Iraqi culinary delights intertwined with
                            international flavors.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.75, type: 'spring', bounce: 0.02, damping: 12 }}
                    className="justify-center order-2 h-full w-full relative flex items-center ">
                    <Image alt="" src={chefImage} />
                </motion.div>
            </Container>
        </section>
    );
};

export default OurChef;
