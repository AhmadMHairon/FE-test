import { useState } from 'react';
import { AuthShapes } from '../shapes';
import { SignupForm } from './signup-form';
import { AnimatePresence } from 'framer-motion';
import { SignupQuestions } from './signup-questions';
import { Assessment } from '@/@types/assessments';
import { SignupSuccessDialog } from './success-dialog';

type Props = {
    questions: Assessment[];
};

export const SignupContent = ({ questions }: Props) => {
    const [questionsList, setQuestionsList] = useState(questions || []);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex relative justify-center lg:justify-end flex-grow min-h-screen items-center h-full">
            <AuthShapes shrink={!!questionsList?.length} />
            <AnimatePresence mode="wait">
                {!questionsList?.length && <SignupForm onSubmit={qs => setQuestionsList(qs)} />}
                {/* Pass questions as param */}
                {questionsList.length && (
                    <SignupQuestions
                        onSubmit={() => {
                            setSubmitted(true);
                        }}
                    />
                )}
            </AnimatePresence>
            {submitted && <SignupSuccessDialog />}
        </div>
    );
};
