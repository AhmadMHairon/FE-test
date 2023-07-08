import { Assessment } from '@/@types/assessments';

export const mock_assessments: Assessment = {
    id: 1,
    label: '',
    order: 1,
    questions: [
        {
            label: 'كم تبلغ ثروتك؟',
            id: 1,
            order: 1,
            description: 'جميع الثروات التي تمتلكها ، يشمل العقارات والأصول الأخرى',
            is_required: 1,
            type: 'MultipleChoice',
            answers: [
                {
                    id: 1,
                    label: '0 ريال - 500 الف ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 2,
                    label: '500 الف  - 2 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 3,
                    label: '2 مليون - 5 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 4,
                    label: '5 مليون - 10 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 5,
                    label: 'فوق 10 مليون ريال',
                    score: 1,
                    description: '',
                },
            ],
        },
        {
            label: 'كم مقدار نسبة السيولة التي لديك؟',
            id: 2,
            order: 2,
            description: 'يشمل النقد ، الحسابات الجارية ، المحافظ الاستثمارية ، الأسهم',
            is_required: 1,
            type: 'MultipleChoice',
            answers: [
                {
                    id: 1,
                    label: '0 ريال - 500 الف ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 2,
                    label: '500 الف  - 2 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 3,
                    label: '2 مليون - 5 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 4,
                    label: '5 مليون - 10 مليون ريال',
                    score: 1,
                    description: '',
                },
                {
                    id: 5,
                    label: 'فوق 10 مليون ريال',
                    score: 1,
                    description: '',
                },
            ],
        },
        {
            label: 'كيف سمعت عن وفرة؟',
            id: 3,
            order: 3,
            description: '',
            is_required: 0,
            type: 'Dropdown',
            answers: [
                {
                    id: 1,
                    label: 'من خلال الإعلانات',
                    score: 1,
                    description: '',
                },
                {
                    id: 2,
                    label: 'عن طريق وسائل التواصل الاجتماعي',
                    score: 1,
                    description: '',
                },
                {
                    id: 3,
                    label: 'اخرى',
                    score: 1,
                    description: '',
                },
            ],
        },
    ],
};
