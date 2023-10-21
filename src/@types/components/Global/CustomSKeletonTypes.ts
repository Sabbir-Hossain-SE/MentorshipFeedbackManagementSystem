import { SkeletonProps } from "@mui/material";

export interface CustomSkeletonProps extends SkeletonProps {
    /**
     * The animation.
     * If `false` the animation effect is disabled.
     * @default 'pulse'
     */
    animation?: "pulse" | "wave" | false;
    /**
     * Optional children to infer width and height from.
     */
    children?: React.ReactNode;
    /**
     * Height of the skeleton.
     * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
     * @default 30
     */
    height?: number | string;
    /**
     * Width of the skeleton.
     * Useful when the skeleton is inside an inline element with no width of its own.
     * * @default 40
     */
    width?: number | string;
    /**
     * The type of content that will be rendered.
     * @default 'text'
     */
    variant?: "text" | "rectangular" | "rounded" | "circular";
    /**
     * Css Class  of the skeleton.
     * Useful when you need to apply your own css style.
     */
    customClass?: string;
}
