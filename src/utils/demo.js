import {
    ENGINEER_MANAGERS,
    JUNIOR_ENGINEER,
    PRODUCT_MANAGERS,
    STRONGLY_AGREE,
    STRONGLY_DISAGREE,
    TEAM_LEAD
} from "./Constant/GlobalConstant";

export const engineers = [
    {
        id: 2,
        name: "Engineer Manage 1",
        designation: ENGINEER_MANAGERS,
        mentored_by: "null"
    },
    {
        id: 3,
        name: "Product Manager 1",
        designation: PRODUCT_MANAGERS,
        mentored_by: ENGINEER_MANAGERS
    },
    {
        id: 4,
        name: "Product Manager 2",
        designation: PRODUCT_MANAGERS,
        mentored_by: ENGINEER_MANAGERS
    },
    { id: 5, name: "Lead Engineer 1", designation: TEAM_LEAD, mentored_by: PRODUCT_MANAGERS },
    { id: 6, name: "Junior Engineer 1", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 7, name: "Junior Engineer 2", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 8, name: "Junior Engineer 3", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 9, name: "Junior Engineer 4", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD }
];

export const evaluations = [
    {
        id: 1,
        feedback_for: 1,
        feedback: [
            { question_on: "uuu?", answer: "ddd ddd ", value: STRONGLY_AGREE },
            { question_on: "uuu?", answer: "ddd ddd ", value: STRONGLY_DISAGREE }
        ],
        date: "12/03/23",
        feedback_by: 2
    }
];
