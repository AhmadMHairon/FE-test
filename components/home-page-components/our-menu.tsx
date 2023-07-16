import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '../common/button';
import { Container } from '../common/container';
import FoodCard from '../common/card/food-card';
import heroImage from '@/assets/hero-section-image.png';

const menuSections = ['Hot Starters', 'Soups', 'Salads', 'Main Courses', 'Desserts', 'Drinks'];

const items = [
    {
        image: heroImage,
        title: 'Chips Karrada',
        type: 'Hot Starters',
        id: 1,
    },
    {
        image: heroImage,
        title: 'Black Kubba',
        type: 'Hot Starters',
        id: 2,
    },
    {
        image: heroImage,
        title: 'Smoked Kubba',
        type: 'Hot Starters',
        id: 3,
    },
    {
        image: heroImage,
        title: 'Gus Taco',
        type: 'Hot Starters',
        id: 4,
    },
    {
        image: heroImage,
        title: 'Aroog',
        type: 'Hot Starters',
        id: 5,
    },
    {
        image: heroImage,
        title: 'Yaki Liver',
        type: 'Hot Starters',
        id: 6,
    },
    {
        image: heroImage,
        title: 'Yaki Chicken',
        type: 'Soups',
        id: 7,
    },
    {
        image: heroImage,
        title: 'yaki Lamb',
        type: 'Soups',
        id: 8,
    },
    {
        image: heroImage,
        title: 'Chips Karrada',
        type: 'Soups',
        id: 9,
    },
    {
        image: heroImage,
        title: 'Black Kubba',
        type: 'Soups',
        id: 10,
    },
    {
        image: heroImage,
        title: 'Smoked Kubba',
        type: 'Soups',
        id: 11,
    },
    {
        image: heroImage,
        title: 'Gus Taco',
        type: 'Salads',
        id: 12,
    },
    {
        image: heroImage,
        title: 'Aroog',
        type: 'Salads',
        id: 13,
    },
    {
        image: heroImage,
        title: 'Yaki Liver',
        type: 'Salads',
        id: 14,
    },
    {
        image: heroImage,
        title: 'Yaki Chicken',
        type: 'Salads',
        id: 15,
    },
    {
        image: heroImage,
        title: 'yaki Lamb',
        type: 'Hot Starters',
        id: 16,
    },

    {
        image: heroImage,
        title: 'Black Kubba',
        type: 'Soups',
        id: 17,
    },
    {
        image: heroImage,
        title: 'Smoked Kubba',
        type: 'Soups',
        id: 18,
    },
    {
        image: heroImage,
        title: 'Gus Taco',
        type: 'Salads',
        id: 19,
    },
    {
        image: heroImage,
        title: 'Aroog',
        type: 'Main Courses',
        id: 20,
    },
    {
        image: heroImage,
        title: 'Yaki Liver',
        type: 'Main Courses',
        id: 21,
    },
    {
        image: heroImage,
        title: 'Yaki Chicken',
        type: 'Main Courses',
        id: 22,
    },
    {
        image: heroImage,
        title: 'yaki Lamb',
        type: 'Main Courses',
        id: 23,
    },

    {
        image: heroImage,
        title: 'Black Kubba',
        type: 'Soups',
        id: 24,
    },
    {
        image: heroImage,
        title: 'Smoked Kubba',
        type: 'Soups',
        id: 25,
    },
    {
        image: heroImage,
        title: 'Gus Taco',
        type: 'Salads',
        id: 26,
    },
    {
        image: heroImage,
        title: 'Aroog',
        type: 'Desserts',
        id: 27,
    },
    {
        image: heroImage,
        title: 'Yaki Liver',
        type: 'Desserts',
        id: 28,
    },
    {
        image: heroImage,
        title: 'Yaki Chicken',
        type: 'Desserts',
        id: 29,
    },
    {
        image: heroImage,
        title: 'yaki Lamb',
        type: 'Desserts',
        id: 30,
    },
    {
        image: heroImage,
        title: 'Black Kubba',
        type: 'Drinks',
        id: 31,
    },
    {
        image: heroImage,
        title: 'Smoked Kubba',
        type: 'Drinks',
        id: 32,
    },
    {
        image: heroImage,
        title: 'Gus Taco',
        type: 'Drinks',
        id: 33,
    },
];

const OurMenu = () => {
    const title = useRef(null);
    const inView = useInView(title, { amount: 'some', once: true });
    const [activeSection, setActiveSection] = useState('Hot Starters');

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
