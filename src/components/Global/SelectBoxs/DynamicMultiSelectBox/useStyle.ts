/* eslint-disable import/no-extraneous-dependencies */
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        margin: theme.spacing(1)
        // width: 300,
    },
    indeterminateColor: {
        // color: "#f50057",
    },
    selectAllText: {
        fontWeight: 500
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    }
}));

export default useStyles;
