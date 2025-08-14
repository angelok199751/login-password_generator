import { useState } from "react";
import { CustomSlider } from "../Shared/CustomSlider";
import { CustomCheckbox } from "../Shared/CustomCheckbox";
import { CustomInput } from "../Shared/CustomInput";
import { CopyButton } from "../Shared/CopyButton";
import { Box, Button, InputAdornment } from "@mui/material";
import { generatePassword } from "./PasswordGenerator";

export const PasswordGeneration = () => {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    if (!useUppercase && !useLowercase && !useDigits && !useSpecialChars) {
      alert("Выберите хотя бы один тип символов!");
      return;
    }

    const newPassword = generatePassword({
      length,
      useUppercase,
      useLowercase,
      useDigits,
      useSpecialChars,
    });
    setPassword(newPassword);
  };

  return (
    <Box sx={{ mt: 0.5 }}>
  <h2 style={{ marginBottom: 8, fontSize: '22px', marginTop: 0 }}>
    Генератор пароля
  </h2>
      <CustomSlider
        value={length}
        onChange={setLength}
        min={6}
        max={24}
        label="Длина пароля"
        id="slider-length"
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start", mt: 1 }}>
        <CustomCheckbox
          label="Заглавные буквы"
          checked={useUppercase}
          onChange={setUseUppercase}
          id="checkbox-uppercase"
        />
        <CustomCheckbox
          label="Строчные буквы"
          checked={useLowercase}
          onChange={setUseLowercase}
          id="checkbox-lowercase"
        />
        <CustomCheckbox
          label="Цифры"
          checked={useDigits}
          onChange={setUseDigits}
          id="checkbox-digits-password"
        />
        <CustomCheckbox
          label="Спецсимволы"
          checked={useSpecialChars}
          onChange={setUseSpecialChars}
          id="checkbox-special"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerate}
          sx={{ mt: 1, alignSelf: "flex-start" }}
          id="generate-btn"
        >
          Сгенерировать пароль
        </Button>
      </Box>

      <CustomInput
        label="Сгенерированный пароль"
        value={password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CopyButton text={password} id={"copy-password"}/>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2 }}
        id="password-field"
      />
    </Box>
  );
};
