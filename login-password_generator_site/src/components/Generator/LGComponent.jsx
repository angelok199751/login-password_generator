import { Box, Button, FormControl, InputLabel, MenuItem, Select, InputAdornment } from "@mui/material";
import { useState } from "react";
import { CustomCheckbox } from "../Shared/CustomCheckbox";
import { CustomInput } from "../Shared/CustomInput";
import { CopyButton } from "../Shared/CopyButton";
import { generateLogin } from "./LoginGenerator";

export const LoginGeneration = () => {
  const [useTwoNames, setUseTwoNames] = useState(false);
  const [useDigits, setUseDigits] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [separator, setSeparator] = useState("_");
  const [login, setLogin] = useState("");

  const handleGenerate = () => {
    const newLogin = generateLogin({
      useTwoNames,
      useDigits,
      useSpecialChars,
      separator,
    });
    setLogin(newLogin);
  };

  return (
  <Box sx={{ mb: 0.5 }}>
    <h2 style={{ marginBottom: 8, fontSize: '22px', marginTop: 0 }}>
    Генератор логина
  </h2>

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
      <CustomCheckbox
        label="Два имени (например, Jhoe_Dow)"
        checked={useTwoNames}
        onChange={setUseTwoNames}
        testId="checkbox-two-names"
      />

      {useTwoNames && (
        <FormControl fullWidth size="small" sx={{ mt: 1 }}>
          <InputLabel id="separator-label">Разделитель</InputLabel>
          <Select
            labelId="separator-label"
            id="separator"
            value={separator}
            label="Разделитель"
            onChange={(e) => setSeparator(e.target.value)}
          >
            <MenuItem value="_">_ (подчёркивание)</MenuItem>
            <MenuItem value="-">- (дефис)</MenuItem>
            <MenuItem value=".">. (точка)</MenuItem>
            <MenuItem value="/">/ (слэш)</MenuItem>
          </Select>
        </FormControl>
      )}

      <CustomCheckbox
        label="Включить цифры"
        checked={useDigits}
        onChange={setUseDigits}
        testId="checkbox-digits-login"
      />

      <CustomCheckbox
        label="Включить спецсимволы"
        checked={useSpecialChars}
        onChange={setUseSpecialChars}
        testId="checkbox-special-login"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        sx={{ alignSelf: "flex-start", mt: 1 }}
        testId="generate-login-btn"
      >
        Сгенерировать логин
      </Button>
    </Box>

    <CustomInput
      label="Логин"
      value={login}
      id="login-field"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CopyButton text={login} />
          </InputAdornment>
        ),
        readOnly: true,
      }}
      sx={{ mt: 0.1 }}
      
    />
  </Box>
);
}