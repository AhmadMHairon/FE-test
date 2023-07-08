import { useState } from 'react';
import { AuthShapes } from '../shapes';
import { SignupForm } from './signup-form';
import { AnimatePresence } from 'framer-motion';
import { SignupQuestions } from './signup-questions';
import { Assessment } from '@/@types/assessments';
import { SignupSuccessDialog } from './success-dialog';
import { motion } from 'framer-motion';

type Props = {
    questions: Assessment[];
};

export const SignupContent = ({ questions }: Props) => {
    const [questionsList, setQuestionsList] = useState(questions || []);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex relative justify-center lg:justify-end flex-grow min-h-screen items-center h-full">
            <div className='absolute top-0 left-0 w-screen h-screen'>
            <AuthShapes shrink={!!questionsList?.length} />
            </div>
            <AnimatePresence mode="wait">
                {!questionsList?.length && (
                    <motion.div
                        className="flex-shrink-0 z-50 max-w-full flex-col justify-center flex items-center w-full sm:w-[max(50%,500px)] lg:px-4"
                        key="signup-form"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <SignupForm onSubmit={qs => setQuestionsList(qs)} />
                    </motion.div>
                )}
                {/* Pass questions as param */}
                {questionsList.length && (
                    <motion.div
                        layout
                        key="signup-questions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="flex-shrink-0 z-50 max-w-full flex-col justify-center flex items-center w-full sm:w-[max(50%,900px)] lg:px-4">
                        <SignupQuestions
                            onBack={() => setQuestionsList([])}
                            onSubmit={() => {
                                setSubmitted(true);
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {submitted && <SignupSuccessDialog />}
        </div>
    );
};
