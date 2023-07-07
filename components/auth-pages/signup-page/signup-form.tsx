import Link from 'next/link';
import { SignupFormValues, useSignup } from '@/apis/signup/use-signup.mutation';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/common/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputController } from '@/components/common/controllers/input-controller';
import yup from '@/utils/yup';
import { motion } from 'framer-motion';
import { Assessment } from '@/@types/assessments';
const schema = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
    email: yup.string().required(),
});

type SignupFormProps = {
    onSubmit: (questions: Assessment[]) => void;
};

export const SignupForm = ({ onSubmit }: SignupFormProps) => {
    const { control, handleSubmit, setError } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutate, isLoading } = useSignup();

    const handleSubmitForm = async (values: SignupFormValues) => {
        mutate(values, {
            onSuccess: (questions: Assessment[]) => {
                toast.success('تم التسجيل بنجاح');
                onSubmit(questions);
            },
            onError: (err: any) => {
                const errors = err?.response?.data?.errors;
                if (errors) {
                    Object.keys(errors).forEach(key => {
                        setError(key as keyof SignupFormValues, {
                            type: 'manual',
                            message: errors[key][0],
                        });
                    });
                }
            },
        });
    };

    return (
        <motion.div
            key="signup-form"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex-shrink-0 z-50 max-w-full flex-col flex items-center w-full sm:w-[max(50%,500px)] lg:px-4">
            <div className="max-w-full lg:rtl:ml-0 lg:ltr:mr-0 rtl:ml-auto ltr:mr-auto w-full sm:w-[440px] py-8 bg-white rounded-md">
                <div className="px-6 mb-6">
                    <Link
                        href=""
                        className="inline-flex items-center hover:underline focus:underline focus:outline-none">
                        <svg
                            className="inline-block w-4 h-4 ml-1 rtl:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 5 12">
                            <path d="M5 12L0 6L5 0" />
                        </svg>
                        <span>الرئيسية</span>
                    </Link>
                </div>
                <div className="pb-4 lg:hidden mb-6 border-b px-6">
                    <div>نمكّن أموالك, ندير مستقبلك</div>
                </div>
                <div className="px-6 space-y-8">
                    <h6 className="text-black font-semibold text-2xl">سجّل اهتمامك</h6>
                    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-7">
                        <InputController control={control} name="name" placeholder="الاسم كامل" />
                        <div className="flex w-full rtl:flex-row-reverse">
                            <InputController
                                control={control}
                                name="phone_country_code"
                                placeholder="رقم الدولة"
                                containerClassName="w-[70px]"
                                dir="ltr"
                                className="rtl:rounded-r-none text-gray-800 ltr:rounded-l-none"
                                disabled
                                defaultValue="+966"
                            />
                            <InputController
                                control={control}
                                name="phone_number"
                                placeholder="رقم الجوال"
                                containerClassName="flex-grow"
                                dir="ltr"
                                className="rtl:rounded-l-none ltr:rounded-r-none"
                            />
                        </div>
                        <InputController
                            control={control}
                            name="email"
                            placeholder="البريد الالكتروني"
                            type="email"
                        />
                        <Button
                            disabled={isLoading}
                            loading={isLoading}
                            type="submit"
                            className="w-full">
                            سجّل اهتمامك
                        </Button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};
