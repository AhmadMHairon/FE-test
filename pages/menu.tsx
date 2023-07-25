import { Container } from '@/components/common/ui/container';
import { itemsGroup, itemsGroupType, menuSections } from '@/constants/food';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FoodCard from '@/components/common/card/food-card';
import Head from 'next/head';

const MenuPage = ({ items }: { items: itemsGroupType }) => {
    const [activeSection, setActiveSection] = useState('Hot Starters');
    const [search, setSearch] = useState('');

    const itemsArrays = Object.values(itemsGroup);
    const allItems = itemsArrays.flat();
    const handleInputChange = (event: any) => {
        setSearch(event.target.value);
    };

    const filteredItems = allItems.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen text-center mx-auto py-32 text-secondary-main">
            <Head>
                <title>Yaba - Menu</title>
                <meta
                    name="description"
                    content="Explore our delicious menu filled with authentic Iraqi dishes at Yaba - A Taste of Iraq."
                />
                <meta name="title" content="Yaba - Menu" />

                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Yaba, Iraqi food, Iraqi restaurant, authentic cuisine, kebabs, biryanis, falafels, Middle Eastern food, cultural delights, menu"
                />
                <meta name="language" content="EN" />
                <meta name="revisit-after" content="7 days" />
                <meta name="author" content="Yaba" />
                <meta property="og:type" content="website" />
            </Head>
            <Container className="flex flex-col justify-center space-y-14 ">
                <motion.h2
                    initial={{ opacity: 0, y: 65 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="font-bold sm:text-5xl text-3xl">
                    Our Menu
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 65 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    className="sm:flex justify-center hidden">
                    <ul className="flex gap-8 ">
                        {menuSections.map(section => (
                            <li
                                className={`font-semibold transition-all  cursor-pointer hover:text-secondary-main flex flex-col after:content-[''] after:h-[2px] after:transition-all ${
                                    activeSection === section && search === ''
                                        ? 'after:bg-secondary-main after:w-full text-secondary-main'
                                        : ' after:bg-primary-main after:w-0 text-primary-light'
                                }`}
                                key={section}
                                onClick={() => {
                                    setActiveSection(section);
                                    setSearch('');
                                }}>
                                <div>{section}</div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 65 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}>
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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 65 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    className="w-full flex justify-center">
                    <div className="flex items-center justify-between w-64 px-4 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 bg-opacity-0 bg-white hover:bg-opacity-5 hover:focus-within:bg-opacity-10 focus-within:bg-opacity-10 transition">
                        <input
                            type="text"
                            value={search}
                            onChange={handleInputChange}
                            placeholder="Enter your search term..."
                            className="flex-1 w-full py-2 px-4 outline-none bg-transparent"
                        />
                    </div>
                </motion.div>

                <div
                    className="grid md:grid-cols-3 grid-cols-2 gap-10 mt-32 "
                    style={{ gridTemplateColumns: ' repeat(auto-fill, minmax(320px, 1fr))' }}>
                    {!search &&
                        items[activeSection].map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 65 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 + index * 0.1, ease: 'easeInOut' }}
                                key={item.id}>
                                <FoodCard item={item} />
                            </motion.div>
                        ))}
                    {search &&
                        filteredItems.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 65 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 + index * 0.1, ease: 'easeInOut' }}
                                key={item.id}>
                                <FoodCard item={item} />
                            </motion.div>
                        ))}
                </div>
            </Container>
        </main>
    );
};

export default MenuPage;

export const getStaticProps: GetStaticProps = async () => {
    const items = itemsGroup;
    return {
        props: {
            items,
        },
    };
};
