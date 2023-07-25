import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Container } from '../common/ui/container';
import FoodCard from '../common/card/food-card';
import { itemsGroupType, menuSections } from '@/constants/food';
import { Button } from '../common/button';
import Link from 'next/link';

const OurMenu = ({ items }: { items: itemsGroupType }) => {
    const title = useRef<HTMLHeadingElement>(null);
    const inView = useInView(title, { amount: 'some', once: true });
    const [activeSection, setActiveSection] = useState('Hot Starters');

    return (
        <section id="why-wafra" className=" text-center mx-auto py-16 text-secondary-main">
            <Container className="flex flex-col justify-center space-y-14">
                <motion.h2
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    ref={title}
                    className="font-bold sm:text-5xl text-3xl">
                    Our Menu
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    className="sm:flex justify-center hidden">
                    <ul className="flex gap-8 ">
                        {menuSections.map(section => (
                            <li
                                className={`font-semibold transition-all  cursor-pointer hover:text-secondary-main flex flex-col after:content-[''] after:h-[2px] after:transition-all ${
                                    activeSection === section
                                        ? 'after:bg-secondary-main after:w-full text-secondary-main'
                                        : ' after:bg-primary-main after:w-0 text-primary-light'
                                }`}
                                key={section}
                                onClick={() => setActiveSection(section)}>
                                <div>{section}</div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                    className="sm:hidden "
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}>
                    <div className="relative inline-block w-48 bg-[#0C0A09] ">
                        <select
                            value={activeSection}
                            onChange={e => setActiveSection(e.target.value)}
                            className="w-full text-primary-light py-4 px-4 pr-8 rounded leading-tight focus:outline-none bg-[#0C0A09]  ">
                            {menuSections.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pr-4 text-primary-light bg-[#0C0A09]">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                <div
                    className="sm:grid md:grid-cols-3 grid-cols-2 gap-10 mt-32 hidden"
                    style={{ gridTemplateColumns: ' repeat(auto-fill, minmax(320px, 1fr))' }}>
                    {items[activeSection]
                        .filter((item, index) => index < 9)
                        .map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 65 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.9 + index * 0.2, ease: 'easeInOut' }}
                                key={item.id}>
                                <FoodCard item={item} />
                            </motion.div>
                        ))}
                </div>
                <div className="flex grid-cols-2 overflow-x-scroll gap-10 mt-16 sm:hidden pb-4 px-6">
                    {items[activeSection]
                        .filter((item, index) => index < 9)
                        .map(item => (
                            <FoodCard key={item.id} item={item} />
                        ))}
                </div>
                <Button
                    as={Link}
                    href="/menu"
                    size={'medium'}
                    className="text-2xl text-center w-[220px] py-3 self-center">
                    View menu
                </Button>
            </Container>
        </section>
    );
};

export default OurMenu;
