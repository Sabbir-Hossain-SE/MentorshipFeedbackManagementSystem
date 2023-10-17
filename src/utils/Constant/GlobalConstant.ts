export const ENGINEER_MANAGERS = "ENGINEER_MANAGERS";
export const PRODUCT_MANAGERS = "PRODUCT_MANAGERS";
export const TEAM_LEAD = "TEAM_LEAD";
export const JUNIOR_ENGINEER = "JUNIOR_ENGINEER";
export const ADMIN = "ADMIN";

export const STRONGLY_AGREE = 5;
export const AGREE = 2;
export const STRONGLY_DISAGREE = -5;
export const FEEDBACK_COLLECTION = "FEEDBACK_COLLECTION";
export const SCHEDULE_SESSION = "SCHEDULE_SESSION";
export const MENTORSHIP_REQUEST = "MENTORSHIP_REQUEST";
export const PROVIDE_MENTORSHIP = "PROVIDE_MENTORSHIP";
export const PERFORMANCE_REVIEW = "PERFORMANCE_REVIEW";

type RoleName =
    | "ENGINEER_MANAGERS"
    | "PRODUCT_MANAGERS"
    | "TEAM_LEAD"
    | "JUNIOR_ENGINEER"
    | "ADMIN"; // Add more roles as needed

export const ROLE_ACCESS: Record<RoleName, string[]> = {
    [ADMIN]: [
        FEEDBACK_COLLECTION,
        SCHEDULE_SESSION,
        MENTORSHIP_REQUEST,
        PROVIDE_MENTORSHIP,
        PERFORMANCE_REVIEW
    ],
    [ENGINEER_MANAGERS]: [PERFORMANCE_REVIEW, SCHEDULE_SESSION],
    [PRODUCT_MANAGERS]: [FEEDBACK_COLLECTION, SCHEDULE_SESSION],
    [TEAM_LEAD]: [FEEDBACK_COLLECTION, SCHEDULE_SESSION, PROVIDE_MENTORSHIP],
    [JUNIOR_ENGINEER]: [MENTORSHIP_REQUEST]
} as const;

export const FEATURE_LIST = [
    {
        name: SCHEDULE_SESSION,
        featureTitle: "Schedule Session",
        featureSubTitle: "Set session for bi-weekly feedback",
        pageUrl: "/schedule-session"
    },
    {
        name: FEEDBACK_COLLECTION,
        featureTitle: "Feedback Collection",
        featureSubTitle: "Collect engineer's feedback",
        pageUrl: "/feedback-collection"
    },
    {
        name: PERFORMANCE_REVIEW,
        featureTitle: "Performance Review",
        featureSubTitle: "Analysis engineer's performance",
        pageUrl: "/performance-review"
    },
    {
        name: MENTORSHIP_REQUEST,
        featureTitle: "Mentorship Request",
        featureSubTitle: "Collect engineer's feedback",
        pageUrl: "/schedule-session"
    },
    {
        name: PROVIDE_MENTORSHIP,
        featureTitle: "Provide Mentorship",
        featureSubTitle: "Collect engineer's feedback",
        pageUrl: "/schedule-session"
    }
];
