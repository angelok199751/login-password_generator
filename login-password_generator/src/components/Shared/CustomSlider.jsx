import React from "react";
import { Slider, Typography } from "@mui/material";

export const CustomSlider = ({ value, onChange, min = 6, max = 24, label = "Длина пароля" }) => {
  return (
    <div>
      <Typography gutterBottom>
        {label}: {value}
      </Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        min={min}
        max={max}
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
};
