import { SignupContent } from '@/components/auth-pages/signup-page';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
import { getCookie } from 'cookies-next';
import { getQuestions } from '@/apis/signup/use-signup.mutation';
import { Assessment } from '@/@types/assessments';

type Props = {
    // Please modify assessment type to respect the api response
    questions: Assessment[];
};

export default function SignupPage({ questions }: Props) {
    return <SignupContent questions={questions} />;
}
export const getServerSideProps: GetServerSideProps = async ({ locale, res, req }) => {
    const token = getCookie('token', { res, req });

    if (token) {
        const questions = await getQuestions(token.toString());
        return {
            props: {
                questions,
                ...(await serverSideTranslations(locale as string, ['common'])),
            },
        };
    }

    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};

SignupPage.Layout = Fragment;
