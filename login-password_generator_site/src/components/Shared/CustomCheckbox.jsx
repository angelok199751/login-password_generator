import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const CustomCheckbox = ({ label, checked, onChange, id }) => {
  return (
    <FormControlLabel
      sx={{ margin: 0 }}
      control={
        <MuiCheckbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          sx={{ paddingY: 0 }}
          id={id}
        />
      }
      label={label}
    />
  );
};