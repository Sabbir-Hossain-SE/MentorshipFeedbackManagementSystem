/* eslint-disable import/no-extraneous-dependencies */
import { CustomTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        flexGrow: 1,
        height: "100%",
        "& .MuiDataGrid-renderingZone": {
            maxHeight: "none !important"
        },
        "& .MuiDataGrid-cell": {
            lineHeight: "unset !important",
            maxHeight: "none !important",
            whiteSpace: "normal"
        },
        "& .MuiDataGrid-row": {
            maxHeight: "none !important",
            minHeight: "none !important"
        },
        "& .MuiDataGrid-virtualScrollerContent": {
            maxHeight: "auto !important"
        },
        "& .MuiDataGrid-cell:focus-within": {
            outline: "none"
        },
        "& .MuiDataGrid-columnHeader:focus-within ": {
            outline: "none"
        },
        "& .MuiDataGrid-cell--editing ": {
            "& input": {
                height: "auto !important"
            }
        }
    },
    menuButton: {
        marginRight: "16px",
        height: "100%"
    },
    title: {
        flexGrow: 1
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px"
    },
    content: {
        // margin: "16px",
        height: "100%"
    },
    tableSelectedItemBar: {
        display: "flex",
        flexDirection: "row",
        padding: " 5px 0 5px 22px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.secondary?.state?.outlinedHoverBackground,
        marginBottom: "1rem"
    },
    tableWrapper: {
        backgroundColor: theme.palette?.background?.paper,
        border: "none",
        "& .MuiDataGrid-main": {
            border: `1px solid ${theme.palette?.others?.outlinedBorder}`,
            borderRadius: "4px"
        },
        "& .MuiDataGrid-footerContainer": {
            border: "none"
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette?.action?.selected,
            borderBottom: `1px solid ${theme.palette?.table?.tableBorder}`,

            "& .MuiDataGrid-columnHeaderTitle": {
                fontFamily: "Gotham Pro Medium ",
                fontSize: "0.875rem ",
                letterSpacing: "0.17px"
            }
        },
        "& .MuiDataGrid-cell:focus": {
            outline: "none"
        },
        "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${theme.palette?.table?.tableBorder}`
        }
    }
}));

export default useStyles;
