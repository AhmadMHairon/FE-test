import { AnimationProps, motion, useReducedMotion } from 'framer-motion';
import popoverIcon from '@/assets/icons/popover.svg';
import Image from 'next/image';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverArrow,
} from '@/components/common/ui/popover';
import { mock_assessments } from '../mock-assessment';
import { MultichoiceAnswers } from './multichoice-questions';
import { DropdownAnswers } from './dropdown-questions';
import { Button } from '@/components/common/button';
import { useForm } from 'react-hook-form';

// to be deleted when integrated
type SignupQuestionsProps = {
    onSubmit: () => void;
};
export const SignupQuestions = ({ onSubmit }: SignupQuestionsProps) => {
    const isReducedMotion = useReducedMotion();
    const { handleSubmit } = useForm();

    const initial: AnimationProps['initial'] = isReducedMotion ? {} : { opacity: 0, y: 100 };
    const animate: AnimationProps['animate'] = isReducedMotion ? {} : { opacity: 1, y: 0 };

    const submitHandler = () => {
        // to be integrated
        onSubmit();
    };

    return (
        <motion.div
            key="signup-questions"
            className="flex-shrink-0 z-50 max-w-full flex-col justify-center flex items-center w-full sm:w-[max(50%,900px)] lg:px-4">
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="max-w-full w-[800px] px-4 space-y-6 mt-16 md:mb-8 mb-60">
                {mock_assessments.questions.map((question, index) => {
                    const renderAnswers = () => {
                        switch (question.type) {
                            case 'MultipleChoice':
                                return (
                                    <MultichoiceAnswers
                                        id={question.id + ''}
                                        answers={question.answers}
                                    />
                                );
                            case 'Dropdown':
                                return (
                                    <DropdownAnswers
                                        id={question.id + ''}
                                        options={question.answers.map(a => ({
                                            label: a.label,
                                            value: a.id + '',
                                        }))}
                                    />
                                );
                            default:
                                return null;
                        }
                    };

                    return (
                        <motion.div
                            key={question.id + ''}
                            className="bg-gray-100 rounded-lg py-6 lg:px-16 sm:px-8 px-4"
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
                                          delay: index * 0.15,
                                      }
                            }>
                            <div className="sm:flex items-start">
                                <div className="text-lg flex-shrink-0 sm:mb-0 mb-2 rtl:text-right ltr:text-left font-bold text-gray-500">
                                    السؤال {index + 1}
                                </div>
                                <div className="flex-grow sm:ltr:pl-6 sm:rtl:pr-6">
                                    <div className="mt-0.5 mb-7 sm:mb-14 flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="font-bold">
                                            {question.label}{' '}
                                            {question.is_required === 0 ? '( اختياري )' : ''}
                                        </span>
                                        {question.description && (
                                            <Popover>
                                                <PopoverTrigger>
                                                    <Image src={popoverIcon} alt="description" />
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <div>الشرح</div>
                                                    <p className="text-sm text-gray-400">
                                                        {question.description}
                                                    </p>
                                                    <PopoverArrow className="fill-white" />
                                                </PopoverContent>
                                            </Popover>
                                        )}
                                    </div>

                                    {renderAnswers()}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
                <div className="flex justify-end">
                    <Button
                        as={motion.button}
                        type="submit"
                        className="w-[150px]"
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
                                      delay: mock_assessments.questions.length * 0.15,
                                  }
                        }>
                        ارسال
                    </Button>
                </div>
            </form>
        </motion.div>
    );
};
