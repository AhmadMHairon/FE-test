import { useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../common/container';
import FoodCard from '../common/card/food-card';
import { items, menuSections } from '@/constants/food';
import { useRouter } from 'next/router';

const OurMenu = () => {
    const title = useRef(null);
    const inView = useInView(title, { amount: 'some', once: true });
    const [activeSection, setActiveSection] = useState('Hot Starters');
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === '/#menu' && title.current) {
            title.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [router.asPath]);

    return (
        <section id="why-wafra" className=" text-center mx-auto py-16 text-secondary-main">
            <div className="flex flex-col justify-center space-y-14">
                <motion.h2
                    initial={{ opacity: 0, y: 65 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    ref={title}
                    className="font-bold sm:text-5xl text-3xl">
                    Our Menu
                </motion.h2>
                <Container>
                    <div className="sm:flex justify-center hidden">
                        <ul className="flex gap-8 ">
                            {menuSections.map(section => (
                                <li
                                    className={`font-semibold transition-all  cursor-pointer hover:text-secondary-main ${
                                        activeSection === section
                                            ? 'text-secondary-main'
                                            : 'text-primary-light'
                                    }`}
                                    key={section}
                                    onClick={() => setActiveSection(section)}>
                                    <div>{section}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative inline-block w-48 sm:hidden">
                        <select
                            value={activeSection}
                            onChange={e => setActiveSection(e.target.value)}
                            className="block appearance-none w-full  text-primary-light py-4 px-4 pr-8 rounded leading-tight focus:outline-none bg-[#0C0A09] focus:border-blue-500">
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
                    <div
                        className="sm:grid md:grid-cols-3 grid-cols-2 gap-10 mt-32 hidden"
                        style={{ gridTemplateColumns: ' repeat(auto-fill, minmax(400px, 1fr))' }}>
                        {items
                            .filter(item => item.type === activeSection)
                            .filter((item, index) => index < 9)
                            .map(item => (
                                <FoodCard key={item.id} item={item} />
                            ))}
                    </div>
                    <div className="flex grid-cols-2 overflow-x-scroll gap-10 mt-16 sm:hidden pb-4 px-6">
                        {items
                            .filter(item => item.type === activeSection)
                            .filter((item, index) => index < 9)
                            .map(item => (
                                <FoodCard key={item.id} item={item} />
                            ))}
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default OurMenu;
