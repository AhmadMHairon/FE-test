import { Button } from '@/components/common/button';
import { Dialog, DialogContent } from '@/components/common/ui/dialog';
import Link from 'next/link';
import { AnimationProps, motion, useReducedMotion } from 'framer-motion';
export const SignupSuccessDialog = () => {
    const isReducedMotion = useReducedMotion();

    const initial: AnimationProps['initial'] = isReducedMotion ? {} : { opacity: 0, y: 16 };
    const animate: AnimationProps['animate'] = isReducedMotion ? {} : { opacity: 1, y: 0 };

    return (
        <Dialog open>
            <DialogContent hideCloseButton>
                <div className="py-6">
                    <div className="flex justify-center mb-16">
                        <div className="relative">
                            <div
                                style={{ animationDuration: '2000ms' }}
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"
                            />
                            <svg
                                width="190"
                                height="191"
                                viewBox="0 0 190 191"
                                fill="none"
                                className="sm:w-[190px] z-10 relative sm:h-[191px] w-[150px] h-[150px]"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.8"
                                    d="M95.001 190.331C147.352 190.331 189.791 147.892 189.791 95.54C189.791 43.189 147.352 0.75 95.001 0.75C42.649 0.75 0.210007 43.189 0.210007 95.54C0.210007 147.892 42.649 190.331 95.001 190.331Z"
                                    fill="#00AB55"
                                />
                                <motion.path
                                    d="M75.617 136.206C74.873 136.207 74.137 136.057 73.452 135.764C72.767 135.472 72.149 135.045 71.634 134.507L41.463 103.107C40.951 102.586 40.548 101.969 40.276 101.291C40.004 100.613 39.87 99.888 39.88 99.157C39.891 98.427 40.046 97.706 40.337 97.036C40.628 96.366 41.049 95.761 41.576 95.255C42.103 94.749 42.724 94.352 43.405 94.088C44.086 93.824 44.813 93.697 45.543 93.716C46.273 93.735 46.992 93.898 47.659 94.196C48.326 94.495 48.927 94.922 49.427 95.455L75.901 123.006L145.115 60.916C145.654 60.424 146.285 60.043 146.971 59.796C147.658 59.549 148.386 59.44 149.115 59.476C149.844 59.512 150.558 59.692 151.217 60.006C151.876 60.32 152.466 60.761 152.953 61.304C153.44 61.847 153.815 62.481 154.056 63.17C154.297 63.859 154.398 64.589 154.355 65.317C154.312 66.045 154.126 66.758 153.806 67.414C153.486 68.069 153.039 68.655 152.491 69.137L79.305 134.792C78.293 135.703 76.979 136.207 75.617 136.206Z"
                                    // fill="white"
                                    stroke="white"
                                    strokeWidth={12}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                                />
                            </svg>
                        </div>
                    </div>

                    <motion.div
                        className="text-3xl text-primary-dark font-bold text-center"
                        initial={initial}
                        animate={animate}
                        transition={
                            isReducedMotion
                                ? {}
                                : {
                                      duration: 0.6,
                                      type: 'spring',
                                      bounce: 0.5,
                                      stiffness: 100,
                                  }
                        }>
                        تم الارسال بنجاح
                    </motion.div>
                    <motion.div
                        className="text-center text-gray-400 mt-1"
                        initial={initial}
                        animate={animate}
                        transition={
                            isReducedMotion
                                ? {}
                                : {
                                      duration: 0.6,
                                      type: 'spring',
                                      bounce: 0.5,
                                      stiffness: 100,
                                      delay: 0.15,
                                  }
                        }>
                        تم تسجيلك في قائمة الانتظار
                    </motion.div>
                    <motion.div
                        className="flex justify-center mt-8"
                        initial={initial}
                        animate={animate}
                        transition={
                            isReducedMotion
                                ? {}
                                : {
                                      duration: 0.6,
                                      type: 'spring',
                                      bounce: 0.5,
                                      stiffness: 100,
                                      delay: 0.3,
                                  }
                        }>
                        <Button as={Link} href="">
                            العودة للصفحة الرئيسية
                        </Button>
                    </motion.div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
