import { TextField } from "@mui/material";

export const CustomInput = ({ label, value, InputProps, id }) => {
  return (
    <TextField
      fullWidth
      label={label}
      id={id}
      variant="outlined"
      value={value}
      margin="normal"
      size="small"
      InputProps={{
        readOnly: true,
        ...InputProps, // <- Важно! Добавляем сюда всё, что прилетит извне
      }}
    />
  );
};
