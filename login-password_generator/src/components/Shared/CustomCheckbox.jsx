import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      sx={{ margin: 0 }} // Убираем внешний отступ
      control={
        <MuiCheckbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          sx={{ paddingY: 0 }} // Уменьшаем вертикальные отступы внутри чекбокса
        />
      }
      label={label}
    />
  );
};