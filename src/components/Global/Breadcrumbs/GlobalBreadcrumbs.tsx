/* eslint-disable react/no-array-index-key */
import { Box, Breadcrumbs, StyledEngineProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomGlobalBreadcrumbsPropsType } from "../../../@types/components/Global/CustomGlobalBreadcrumbsTypes";
import { generateRandomString } from "../../../utils/helperFunction";

const GlobalBreadcrumbs: React.FC<CustomGlobalBreadcrumbsPropsType> = ({
    components,
    customClass,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "demo";
    const classes = `${defaultClasses} ${customClass}`;
    // const [Value, setValue] = React.useState();

    return (
        <StyledEngineProvider injectFirst>
            <div role="presentation">
                <Breadcrumbs
                    aria-label="breadcrumb"
                    color="text.secondary"
                    className={classes}
                    {...rest}
                >
                    {components.map((component, index) => (
                        <Box key={index.toString() + generateRandomString(10)}>
                            {index < components.length - 1 && (
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        cursor: component.link === "#" ? "auto" : "pointer"
                                    }}
                                    to={component.link}
                                >
                                    <Typography
                                        color={
                                            component.link === "#" ? "secondary" : "text.secondary"
                                        }
                                        variant={component.link === "#" ? "subtitle2" : "body2"}
                                        sx={{
                                            ":hover": {
                                                textDecoration:
                                                    component.link === "#" ? "" : "underline"
                                            }
                                        }}
                                    >
                                        {component.name}
                                    </Typography>
                                </Link>
                            )}
                            {index === components.length - 1 && (
                                <Typography color="secondary" variant="subtitle2">
                                    {component.name}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Breadcrumbs>
            </div>
        </StyledEngineProvider>
    );
};
export default GlobalBreadcrumbs;
