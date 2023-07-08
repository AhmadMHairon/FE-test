import { motion, useReducedMotion } from 'framer-motion';

type AuthShapesProps = {
    shrink?: boolean;
};
export const AuthShapes = ({ shrink }: AuthShapesProps) => {
    const isReducedMotion = useReducedMotion();
    return (
        <div>
            {!shrink && (
                <motion.div exit={{ opacity: 0, y: -70 }}>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="lg:block hidden text-white text-2xl absolute right-56 top-32 z-30">
                        <div className="text-5xl mb-12 font-semibold">نمكّن أموالك</div>
                        <div className="-mr-24 text-5xl font-semibold">ندير مستقبلك</div>
                    </motion.div>
                </motion.div>
            )}
            <div className="absolute max-w-[100vw] rtl:right-0 bottom-0">
                <motion.svg
                    width="753"
                    height="982"
                    viewBox="0 0 753 982"
                    fill="none"
                    className="max-w-full"
                    initial={
                        isReducedMotion
                            ? {}
                            : {
                                  x: '50%',
                                  y: '30%',
                                  opacity: 0,
                              }
                    }
                    animate={
                        isReducedMotion
                            ? {}
                            : {
                                  x: shrink ? '30%' : 0,
                                  y: 0,
                                  opacity: 1,
                              }
                    }
                    transition={{ duration: isReducedMotion ? 0 : 1, ease: 'easeInOut' }}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1115.5 930.5H788.541L94.5 273.353L94.5 -48.5H434.591L1115.5 596.213V930.5Z"
                        stroke="#00AB55"
                        strokeOpacity="0.1"
                        strokeWidth="3"
                    />
                    <path
                        d="M0 323.999L694.943 982H1024V645.568L342.189 4.02896e-06H0L0 323.999Z"
                        fill="url(#paint0_linear_7_3934)"
                    />
                    <path
                        d="M0 238.545L512.385 723H755V475.301L252.297 1.63753e-07H0L0 238.545Z"
                        fill="url(#paint1_linear_7_3934)"
                        fillOpacity="0.3"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_7_3934"
                            x1="-3.54196e-05"
                            y1="0.000126715"
                            x2="744.5"
                            y2="698"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00AB55" />
                            <stop offset="1" stopColor="#11998E" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_7_3934"
                            x1="1.25688e-05"
                            y1="29.1894"
                            x2="377.253"
                            y2="361.78"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>

            <div className="absolute max-w-[100vw] bottom-0 right-16">
                <motion.svg
                    width="610"
                    height="343"
                    viewBox="0 0 610 343"
                    fill="none"
                    transition={
                        isReducedMotion ? {} : { duration: isReducedMotion ? 0 : 1, ease: 'easeInOut' }
                    }
                    animate={
                        isReducedMotion
                            ? {}
                            : shrink
                            ? {
                                  x: '30%',
                              }
                            : {}
                    }
                    xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M608.5 583.5L414.577 583.5L1.5 192.368L1.5 1.5H203.245L608.5 385.225V583.5Z"
                        stroke="url(#paint0_linear_11_1102)"
                        strokeOpacity="0.6"
                        strokeWidth="3"
                        initial={isReducedMotion ? {} : { pathLength: 0 }}
                        animate={isReducedMotion ? {} : { pathLength: 1 }}
                        transition={{ duration: isReducedMotion ? 0 : 2, ease: 'easeInOut' }}
                    />
                    <motion.path
                        d="M69 223.319L416.472 555H581V385.413L240.094 60H69L69 223.319Z"
                        fill="url(#paint1_linear_11_1102)"
                        initial={
                            isReducedMotion
                                ? {}
                                : {
                                      x: '20%',
                                      y: '30%',
                                      opacity: 0,
                                  }
                        }
                        animate={
                            isReducedMotion
                                ? {}
                                : {
                                      x: 0,
                                      y: 0,
                                      opacity: 1,
                                  }
                        }
                        transition={{
                            duration: isReducedMotion ? 0 : 1,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_11_1102"
                            x1="3.50576"
                            y1="7.0098"
                            x2="269.566"
                            y2="248.593"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00AB55" />
                            <stop offset="0.641019" stopColor="#00AB55" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_11_1102"
                            x1="69"
                            y1="60"
                            x2="382"
                            y2="366"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00AB55" />
                            <stop offset="1" stopColor="#11998E" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
        </div>
    );
};
