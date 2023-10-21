export const ENGINEER_MANAGERS = "ENGINEER_MANAGERS";
export const PRODUCT_MANAGERS = "PRODUCT_MANAGERS";
export const TEAM_LEAD = "TEAM_LEAD";
export const JUNIOR_ENGINEER = "JUNIOR_ENGINEER";

export const STRONGLY_AGREE = 5;
export const AGREE = 2;
export const STRONGLY_DISAGREE = -5;
export const FEEDBACK = "FEEDBACK";
export const PERFORMANCE_REVIEW = "PERFORMANCE_REVIEW";
export const MENTORSHIP = "MENTORSHIP";
export type RoleNameType =
    | "ENGINEER_MANAGERS"
    | "PRODUCT_MANAGERS"
    | "TEAM_LEAD"
    | "JUNIOR_ENGINEER";

export const ROLE_ACCESS: Record<RoleNameType, string[]> = {
    [ENGINEER_MANAGERS]: [MENTORSHIP, FEEDBACK, PERFORMANCE_REVIEW],
    [PRODUCT_MANAGERS]: [FEEDBACK, MENTORSHIP],
    [TEAM_LEAD]: [FEEDBACK, MENTORSHIP],
    [JUNIOR_ENGINEER]: [MENTORSHIP]
};

export const FEATURE_LIST = [
    {
        name: FEEDBACK,
        featureTitle: "Feedback Collection",
        featureSubTitle: "Collect engineer's feedback",
        pageUrl: "/feedback"
    },
    {
        name: PERFORMANCE_REVIEW,
        featureTitle: "Performance Review",
        featureSubTitle: "Analysis engineer's performance",
        pageUrl: "/performance-review"
    },
    {
        name: MENTORSHIP,
        featureTitle: "Mentorship Request",
        featureSubTitle: "Collect engineer's feedback",
        pageUrl: "/mentorship"
    }
];
