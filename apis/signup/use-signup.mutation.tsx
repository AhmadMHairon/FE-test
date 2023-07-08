import { http } from '@/utils/http';
import { useMutation } from 'react-query';
import { serialize } from 'object-to-formdata';
import jsCookie from 'js-cookie';

export type SignupFormValues = {
    name: string;
    phone_number: string;
    email: string;
};

export const getQuestions = async (token: string) => {
    const { data } = await http.get('/customer/assessment', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data.data;
};

const singupHandler = async (values: SignupFormValues) => {
    const formData = serialize({ ...values, phone_country_code: 'sa' });

    const { data } = await http.post('auth/register', formData);
    jsCookie.set('token', data.data?.token, { expires: 1 });

    const questions = await getQuestions(data?.data?.token);

    return questions;
};

export const useSignup = () => {
    return useMutation({
        mutationFn: singupHandler,
    });
};
