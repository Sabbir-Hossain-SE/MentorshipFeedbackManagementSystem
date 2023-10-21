import { RadioGroupProps, RadioProps } from "@mui/material";

export type RadioData = {
    /**
     * id for the radio.
     * @param {string | number} id The id of the selected radio button.
     */
    id: string | number | boolean;
    /**
     * label for the radio item.
     * @param {React.ReactNode | string} name The label of the radio button.
     */
    name: React.ReactNode | string;
};
export interface CustomRadioProps extends RadioProps {
    color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default";
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export interface CustomRadioButtonGroupProps extends RadioGroupProps {
    /**
     * Radio item list.
     * @param {RadioData} radioData The list of the radio data.
     */
    radioData: RadioData[];
    /**
     * Callback fired when a radio button is selected.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * @param {string} value The value of the selected radio button.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    handleChange?: CustomRadioProps["handleChange"] | null;
    children?: React.ReactNode;
    color?: CustomRadioProps["color"];
    row?: boolean;
    register?: object | any;
    radioProps?: CustomRadioProps;
}
