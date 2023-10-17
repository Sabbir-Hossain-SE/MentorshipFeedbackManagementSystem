import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { MultipleTextFiledProps } from "../../../@types/MultipleTextfieldTypes";
import CustomIconButton from "../../Buttons/IconButton/CustomIconButton";
import { generateRandomString } from "../../utils/helperFunction";
import CustomTextField from "../CustomTextField";

const MultiITextField: React.FC<MultipleTextFiledProps> = ({
    name,
    fieldDataList,
    setFieldDataList,
    placeholder = "",
    isError,
    handleChange,
    ...rest
}) => {
    const [textFields, setTextFields] = useState<any[]>([]);
    useEffect(() => {
        const mapArray: any[] = [];
        if (!!fieldDataList && fieldDataList.length > 0) {
            fieldDataList.map((item) =>
                mapArray.push({ [name]: item, id: generateRandomString(10) })
            );

            setTextFields(mapArray);
        } else {
            setTextFields([{ [name]: [""], id: generateRandomString(10) }]);
        }
    }, [fieldDataList, name]);
    // useEffect(() => {
    //     const mapArray: any[] = [];
    //     if (!!fieldDataList && fieldDataList.length > 0) {
    //         fieldDataList.map((item) =>
    //             mapArray.push({ [name]: item, id: generateRandomString(10) })
    //         );

    //         setTextFields(mapArray);
    //     }
    // }, [fieldDataList, name]);

    const handleInputArrayChange = (e, index) => {
        const inputArrayData: any[] = [];
        const { name, value } = e.target;
        const list = [...textFields];
        list[index][name] = value;
        setTextFields(list);
        textFields.map((data) => inputArrayData.push(data[name]));
        setFieldDataList(inputArrayData);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (id) => {
        const tempTextFieldsArray: any[] = [];
        let textFieldCopy = [...textFields];

        textFieldCopy = textFieldCopy.filter((list) => list.id !== id);
        setTextFields(textFieldCopy);

        textFieldCopy.map((textField) => tempTextFieldsArray.push(textField[name]));
        setFieldDataList(tempTextFieldsArray);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setTextFields([...textFields, { [name]: "", id: generateRandomString(10) }]);
    };
    return (
        <Box>
            {textFields.length > 0 &&
                textFields.map((item, index) => (
                    <Box
                        key={item.id + generateRandomString(10)}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "10px",
                            alignItems: "center"
                        }}
                    >
                        <CustomTextField
                            name={name}
                            id={item.id}
                            // helperText={
                            //     isError && (item[name] === "" || item[name] === undefined) ? (
                            //         <Typography variant="subtitle2" component="span" color="error">
                            //             Field can not be empty
                            //         </Typography>
                            //     ) : isError && !isValidImageUrl(item[name]) ? (
                            //         <Typography variant="subtitle2" component="span" color="error">
                            //             Invalid Format
                            //         </Typography>
                            //     ) : null
                            // }
                            type="text"
                            placeholder={placeholder}
                            defaultValue={item[name]}
                            handleOnBlur={(e) => handleInputArrayChange(e, index)}
                            {...rest}
                        />
                        {textFields.length - 1 === index && (
                            <CustomIconButton
                                sx={{ alignItems: "flex-start", alignSelf: "flex-start" }}
                                handleButton={handleAddClick}
                                color="secondary"
                                size="small"
                            >
                                <AddCircleOutlineRoundedIcon />
                            </CustomIconButton>
                        )}
                        {textFields.length !== 1 && (
                            <CustomIconButton
                                handleButton={() => handleRemoveClick(item.id)}
                                sx={{
                                    height: "2.5rem",
                                    width: "2.5rem",
                                    marginLeft: "1rem",
                                    alignSelf: "flex-start"
                                }}
                            >
                                <DeleteIcon />
                            </CustomIconButton>
                        )}
                    </Box>
                ))}
        </Box>
    );
};

export default MultiITextField;
