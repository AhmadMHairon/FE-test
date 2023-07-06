import yup from '@/utils/yup';
import { GetStaticProps } from 'next';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/common/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputController } from '@/components/common/controllers/input-controller';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { http } from '@/utils/http';

const scehem = yup.object().shape({
    name: yup.string().required(),
    phone_number: yup.string().required(),
    email: yup.string().required()
})

export default function SignupPage() {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(scehem)
    })

    const handleSubmitForm = async (values: object) => {
        try {
           await http.post("/auth/register", values)
        } catch (err) {
            // err
        }
    }

    return (
        <div className='space-y-8'>
            <h6 className='text-black font-semibold text-2xl'>سجّل اهتمامك</h6>
            <form onSubmit={handleSubmit(handleSubmitForm)} className='space-y-5'>
                <InputController control={control} name="name" placeholder="الاسم كامل" />
                <InputController control={control} name="phone_number" placeholder="رقم الجوال" />
                <InputController control={control} name="email" placeholder="البريد الالكتروني" />
                <Button type='submit' className='w-full'>
                    سجّل اهتمامك
                </Button>
            </form>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
