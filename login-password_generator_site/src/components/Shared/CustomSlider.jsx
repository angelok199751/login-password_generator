import { Slider, Typography } from "@mui/material";
import { useId } from "react";

export const CustomSlider = ({ value, onChange, min = 6, max = 24, label = "Длина пароля", id }) => {
  const generatedId = useId();
  const sliderId = id || generatedId;
  return (
    <div>
      <Typography gutterBottom>
        {label}: {value}
      </Typography>
      <Slider
        value={value}
        id={sliderId}
        onChange={(e, newValue) => onChange(newValue)}
        min={min}
        max={max}
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
};
