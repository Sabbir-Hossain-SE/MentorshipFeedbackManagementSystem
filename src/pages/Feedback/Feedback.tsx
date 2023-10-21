import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import FeedbackDatatable from "components/Feedback/FeedbackDatatable";
import ScheduleCard from "components/Feedback/ScheduleCard";
import CustomDrawerV2 from "components/Global/Drawer/CustomDrawerV2";
import CustomHeader from "components/Global/Header/CustomHeader";
import CustomTabs from "components/Global/Tabs/CustomTabs";
import { HeaderButtons } from "../../@types/components/Global/CustomHeaderTypes";
import useFeedback from "./useFeedback";

const Feedback = () => {
    const {
        activeTab,
        setActiveTab,
        tabData,
        components,
        handleAddTeamMember,
        isSchedulingDrawerOpen,
        handleAddTableColumnDrawer
    } = useFeedback();
    const headerButtons: HeaderButtons[] = [
        {
            name: "Add Team Member",
            color: "secondary",
            startIcon: <AddIcon />,
            action: () => handleAddTeamMember(true)
        }
    ];
    const tabPanelData = [
        {
            number: 0,
            label: "Feedback Form",
            content: <ScheduleCard />
        },
        {
            number: 1,
            label: "Feedback Datatable",
            content: <FeedbackDatatable />
        }
    ];

    return (
        <Box>
            <Box sx={{ width: 1, mb: "30px" }}>
                <CustomHeader
                    components={components}
                    headerText="Team Management"
                    buttons={headerButtons}
                    color="secondary"
                />
            </Box>

            <Typography variant="h5" mb="12px" color="primary.main">
                Evaluate your subordinates by putting feedback here.
            </Typography>
            <CustomTabs
                appBackgroundColor="secondary.state.outlinedHoverBackground"
                setActiveTab={setActiveTab}
                tabData={tabData}
                activeTab={activeTab}
                tabPanelData={tabPanelData}
                sx={{ overflow: "hidden" }}
            />
            <CustomDrawerV2
                drawerBodySx={{
                    height: "100%"
                }}
                open={isSchedulingDrawerOpen}
                onCloseDrawer={() => handleAddTableColumnDrawer(false)}
                heading="Set a recurring feedback session"
            >
                <Box>fgdfgh</Box>
            </CustomDrawerV2>
        </Box>
    );
};

export default Feedback;
