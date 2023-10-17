import { CustomTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useCustomDrawerStyles = makeStyles((theme: CustomTheme) => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: "32px",
        marginBottom: "26px"
    },
    heading: {
        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: "400",
        textTransform: "capitalize"
    },
    closeButton: {
        width: "36px",
        height: "36px",
        borderRadius: "100px",
        marginLeft: "16px",
        backgroundColor: theme.palette.action.disabled
    },
    closeIcon: {
        width: "24px",
        height: "24px",
        borderRadius: "100px",
        color: theme.palette.text.fill
    }
}));

export default useCustomDrawerStyles;
