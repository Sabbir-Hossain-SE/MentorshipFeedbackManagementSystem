import { Skeleton } from "@mui/material";
import { CustomSkeletonProps } from "../../../@types/components/Global/CustomSKeletonTypes";
import "./custom.style.css";

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
    customClass,
    variant = "text",
    width = 40,
    height = 30,
    animation = "pulse",
    children,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    return (
        <Skeleton
            animation={animation}
            className={classes}
            variant={variant}
            height={height}
            width={width}
            {...rest}
        />
    );
};

export default CustomSkeleton;
