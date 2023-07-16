import Link from 'next/link';
import { header_links } from './_links';
import { Fragment, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import yabaLogo from '@/assets/yaba-logo.svg';
import { Button } from '@/components/common/button';

const MENU_OPEN_DURATION = 0.3;

export const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isReducedMotion = useReducedMotion();
    const router = useRouter();

    const setOpen = () => setIsOpen(true);
    const setClose = () => setIsOpen(false);

    useEffect(() => {
        const closeWithKeyboard = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', closeWithKeyboard);
        }
        return () => {
            document.removeEventListener('keydown', closeWithKeyboard);
        };
    }, [isOpen]);

    return (
        <Fragment>
            <button aria-label="menu" className="block md:hidden" onClick={setOpen}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[997] h-screen">
                        <style>
                            {`
                            body {
                                overflow-y: hidden;
                            }
                        `}
                        </style>
                        <div className="absolute inset-0 bg-black/30" onClick={setClose} />
                        <motion.div
                            variants={{
                                open: { x: 0 },
                                //! When multilanguage is set, handle ltr to start from x: 100%
                                closed: { x: '-100%' },
                            }}
                            initial="closed"
                            animate="open"
                            exit={{
                                x: '-100%',
                                transition: {
                                    delay: 0.5,
                                },
                            }}
                            transition={{
                                duration: MENU_OPEN_DURATION,
                                ease: 'easeInOut',
                            }}
                            className="flex flex-col bg-primary-main w-[266px] absolute rtl:left-0 ltr:right-0 inset-y-0 ">
                            <div className="flex justify-between items-center p-4 ">
                                <motion.button
                                    initial={isReducedMotion ? {} : { opacity: 0, x: 15 }}
                                    animate={isReducedMotion ? {} : { opacity: 1, x: 0 }}
                                    exit={isReducedMotion ? {} : { opacity: 0, x: 15 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    aria-label="close"
                                    onClick={setClose}
                                    className="focus:outline-none focus:bg-primary-lighter focus:ring-1 focus:ring-offset-1 focus:ring-primary-lighter rounded-full hover:bg-primary-lighter w-8 h-8 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary-main"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </motion.button>
                                <Link href="/" aria-label="logo">
                                    <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -15 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                                        <Image
                                            width="128"
                                            height="52"
                                            className="w-[80px]"
                                            src={yabaLogo}
                                            alt="logo"
                                        />
                                    </motion.div>
                                </Link>
                            </div>
                            <motion.hr
                                className="border-primary-main"
                                variants={{
                                    open: { width: '100%' },
                                    closed: { width: 0 },
                                }}
                                initial={isReducedMotion ? {} : 'closed'}
                                animate={isReducedMotion ? {} : 'open'}
                                exit={isReducedMotion ? {} : 'closed'}
                                transition={{
                                    duration: isOpen ? MENU_OPEN_DURATION + 0.2 : 0,
                                    ease: 'easeInOut',
                                    delay: 0.1,
                                }}
                            />
                            <ul className="flex-grow bg-primary-main">
                                {header_links.map((link, idx) => {
                                    const isHashLink = link.href.startsWith('#');
                                    const href = !isHashLink
                                        ? link.href
                                        : link.page === router.pathname
                                        ? link.href
                                        : `${link.page}${link.href}`;
                                    return (
                                        <motion.li
                                            className="font-semibold transition-all  focus:outline-none hover:text-secondary-main text-primary-light"
                                            key={href}
                                            initial={isReducedMotion ? {} : { opacity: 0, y: 27 }}
                                            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                                            exit={
                                                isReducedMotion
                                                    ? {}
                                                    : {
                                                          opacity: 0,
                                                          y: 27,
                                                          transition: {
                                                              delay: 0.2 - idx * 0.1,
                                                              duration: 0.35,
                                                          },
                                                      }
                                            }
                                            transition={{
                                                duration: 0.35,
                                                ease: 'easeInOut',
                                                delay: idx * 0.1,
                                            }}>
                                            <Link
                                                className="p-4 block w-full border-b hover:border-b-primary-light hover:bg-primary-lighter/50 focus:bg-primary-lighter/50 focus:border-b-primary-light focus:outline-none"
                                                onClick={setClose}
                                                href={href}>
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                            <div className="pb-4 bg-primary-main ">
                                <motion.div
                                    className="justify-center flex gap-3"
                                    initial={{ opacity: 0, y: 65 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.65,
                                        type: 'spring',
                                        bounce: 0.25,
                                        damping: 8,
                                    }}>
                                    <Button
                                        as={Link}
                                        href="/sign-up"
                                        size={'medium'}
                                        className="text-2xl text-center w-[220px] py-3">
                                        Contact us
                                    </Button>
                                </motion.div>

                                <motion.hr
                                    className="border-primary-main mb-4"
                                    variants={{
                                        open: { width: '100%' },
                                        closed: { width: 0 },
                                    }}
                                    initial={isReducedMotion ? {} : 'closed'}
                                    animate={isReducedMotion ? {} : 'open'}
                                    exit={isReducedMotion ? {} : 'closed'}
                                    transition={{
                                        duration: isOpen ? MENU_OPEN_DURATION + 0.2 : 0,
                                        ease: 'easeInOut',
                                        delay: 0.1,
                                    }}
                                />

                                <motion.span
                                    initial={isReducedMotion ? {} : { opacity: 0 }}
                                    animate={isReducedMotion ? {} : { opacity: 1 }}
                                    exit={isReducedMotion ? {} : { opacity: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.2 }}
                                    className="text-sm block text-black/60 text-center">
                                    © {new Date().getFullYear()} وفرة. جميع الحقوق محفوظة
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* <div>
                <div className="py-5 border-b border-primary-main">
                    <Link href="/">
                        <Image
                            src={wafraLogo}
                            alt="wafra-logo"
                            height={40}
                            width={160}
                            className="h-9 w-40 object-contain px-2.5"
                        />
                    </Link>
                </div>
                <div className="px-5 space-y-5 pt-5">
                    <ul className="space-y-5">
                        {header_links.map(link => (
                            <li className="font-semibold" key={link.href}>
                                {link.name}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Link href="/" className="font-semibold">
                            سجّل اهتمامك
                        </Link>
                    </div>
                </div>
            </div> */}
        </Fragment>
    );
};
