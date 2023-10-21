import { useState } from "react";

const useFeedback = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isSchedulingDrawerOpen, setIsSchedulingDrawerOpen] = useState(false);
    const tabData = [
        {
            number: 0,
            label: "Upcoming Feedback Session"
        },
        {
            number: 1,
            label: "Feedback History"
        }
    ];
    const components = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: null
        },

        { name: "Feedback", link: "#" }
    ];

    const handleAddTeamMember = (addStatus: boolean) => {
        setIsSchedulingDrawerOpen(addStatus);
    };

    const handleAddTableColumnDrawer = (drawerStatus: boolean) => {
        setIsSchedulingDrawerOpen(drawerStatus);
    };
    return {
        activeTab,
        setActiveTab,
        tabData,
        components,
        handleAddTeamMember,
        handleAddTableColumnDrawer,
        isSchedulingDrawerOpen
    };
};

export default useFeedback;
