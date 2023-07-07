export type AssessmentQuestion = {
    id: number;
    label: string;
    description?: string;
    order: number;
    is_required: 0 | 1;
    // eslint-disable-next-line @typescript-eslint/ban-types
    type: 'MultipleChoice' | (string & {});
    answers: {
        id: number;
        label: string;
        description?: string;
        score: number;
        is_conditional_questions_exists?: boolean;
        conditional_questions?: AssessmentQuestion[];
    }[];
};

export type Assessment = {
    id: number;
    label: string;
    description?: string;
    image?: string;
    order: number;
    should_display_one_question?: boolean;
    questions: AssessmentQuestion[];
    [key: string]: any;
};
