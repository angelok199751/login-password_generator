import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const CustomCheckbox = ({ label, checked, onChange, testId }) => {
  return (
    <FormControlLabel
      sx={{ margin: 0 }}
      control={
        <MuiCheckbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          sx={{ paddingY: 0 }}
          inputProps={{
            'data-testid': testId,
          }}
        />
      }
      label={label}
    />
  );
};