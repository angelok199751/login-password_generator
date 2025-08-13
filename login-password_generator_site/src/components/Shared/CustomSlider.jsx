import { Slider, Typography } from "@mui/material";

export const CustomSlider = ({ value, onChange, min = 6, max = 24, label = "Длина пароля", id }) => {
  return (
    <div>
      <Typography gutterBottom>
        {label}: {value}
      </Typography>
      <Slider
        value={value}
        id={id}
        onChange={(e, newValue) => onChange(newValue)}
        min={min}
        max={max}
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
};
