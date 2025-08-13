import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { useId } from "react";

export const CustomCheckbox = ({ label, checked, onChange, id }) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  return (
    <FormControlLabel
      sx={{ margin: 0 }} 
      control={
        <MuiCheckbox
          checked={checked}
          id={checkboxId}
          onChange={(e) => onChange(e.target.checked)}
          sx={{ paddingY: 0 }} 
        />
      }
      label={label}
    />
  );
};