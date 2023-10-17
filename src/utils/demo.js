import {
    ENGINEER_MANAGERS,
    JUNIOR_ENGINEER,
    PRODUCT_MANAGERS,
    STRONGLY_AGREE,
    STRONGLY_DISAGREE,
    TEAM_LEAD
} from "./Constant/GlobalConstant";

export const engineers = [
    { id: 1, name: "Md Atif", designation: ENGINEER_MANAGERS, mentored_by: null },
    { id: 2, name: "Md Tanim", designation: PRODUCT_MANAGERS, mentored_by: ENGINEER_MANAGERS },
    { id: 3, name: "Md Rafi", designation: TEAM_LEAD, mentored_by: PRODUCT_MANAGERS },
    { id: 4, name: "Md Shamim", designation: TEAM_LEAD, mentored_by: PRODUCT_MANAGERS },
    { id: 5, name: "Md Rahim", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 6, name: "Md Raju", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 7, name: "Md Fahim", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 8, name: "Md Mamun", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD },
    { id: 9, name: "Md Apurba", designation: JUNIOR_ENGINEER, mentored_by: TEAM_LEAD }
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
