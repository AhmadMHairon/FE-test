import { Assessment } from '@/@types/assessments';
import { RadioGroup, RadioGroupItem } from '@/components/common/ui/radio-group';
import { cls } from '@/utils/cls';

type MultichoiceAnswersProps = {
    answers: Assessment['questions'][0]['answers'];
    id: string;
};
export const MultichoiceAnswers = ({ id, answers }: MultichoiceAnswersProps) => {
    return (
        <div>
            <RadioGroup name={id} className="flex flex-wrap gap-4" dir="rtl">
                {answers.map(answer => (
                    <div key={answer.id}>
                        <RadioGroupItem
                            className="absolute opacity-0 peer"
                            id={`${id}_${answer.id}`}
                            value={`${answer.id}`}
                        />
                        <label
                            htmlFor={`${id}_${answer.id}`}
                            className={cls(
                                'flex items-center border border-gray-300 justify-center w-[172px] bg-gray-300 h-8 rounded-full',
                                'peer-focus:border-primary-dark peer-aria-checked:bg-primary-dark peer-aria-checked:text-white',
                                'hover:border-primary-dark cursor-pointer'
                            )}>
                            <span className="font-semibold text-sm">{answer.label}</span>
                        </label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};
