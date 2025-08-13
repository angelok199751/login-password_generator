import { TextField } from "@mui/material";
import { useId } from "react";

export const CustomInput = ({ label, value, InputProps, id }) => {
  const generatedId = useId();
    const inputId = id || generatedId;
  return (
    <TextField
      fullWidth
      label={label}
      id={inputId}
      variant="outlined"
      value={value}
      margin="normal"
      size="small"
      InputProps={{
        readOnly: true,
        ...InputProps, 
      }}
    />
  );
};
