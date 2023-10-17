const muiButton = () => {
    return {
        // containedPrimary:{
        //     styleOverrides:{
        //         root:{
        //             "&:hover": {
        //                 backgroundColor: 'rgb(105,93,223)'
        //             },
        //         }
        //     }
        // },

        styleOverrides: {
            // Name of the slot
            root: {
                // Some CSS
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "none"
            }
        },
        variants: [
            {
                props: {
                    variant: "contained",
                    color: "primary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(31, 28, 86)"
                    }
                }
            },
            {
                props: {
                    variant: "contained",
                    color: "secondary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(38, 98, 194)"
                    }
                }
            },
            {
                props: {
                    variant: "contained",
                    color: "error"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(167, 56, 95)"
                    }
                }
            },
            {
                props: {
                    variant: "contained",
                    color: "warning"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(191, 75, 30)"
                    }
                }
            },
            {
                props: {
                    variant: "contained",
                    color: "info"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(95, 88, 179)"
                    }
                }
            },
            {
                props: {
                    variant: "contained",
                    color: "success"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(56, 159, 63)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "primary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(234, 242, 255)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "secondary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(238, 245, 255)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "error"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(253, 245, 248)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "warning"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(255, 246, 243)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "info"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(248, 247, 254)"
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "success"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(245, 252, 245)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "primary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(234, 242, 255)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "secondary"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(238, 245, 255)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "error"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(253, 245, 248)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "warning"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(255, 246, 243)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "info"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(248, 247, 254)"
                    }
                }
            },
            {
                props: {
                    variant: "text",
                    color: "success"
                },
                style: {
                    "&:hover": {
                        backgroundColor: "rgb(245, 252, 245)"
                    }
                }
            }
        ]
        /*  defaultProps: {
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true,
    }, */
    };
};
export default muiButton;
