import { Container, Typography, Box } from "@mui/material";
import { LoginGeneration } from "./LGComponent";
import { PasswordGeneration } from "./PWComponent";

export const GeneratorLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Левая колонка с текстом-инструкцией */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" style={{ marginBottom: '5px' }}>
            Генератор логина и пароля
          </Typography>
          <Typography variant="body1" gutterBottom>
            Этот сайт безопасен: мы не сохраняем и не отправляем ваши данные.
          </Typography>
          <Box component="ol" sx={{ pl: 3, mt: 2 }}>
            <li>Укажите параметры логина и пароля</li>
            <li>Нажмите "Сгенерировать"</li>
            <li>Скопируйте значения при необходимости</li>
          </Box>
        </Box>

        {/* Правая колонка с генераторами */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
  <LoginGeneration />
  <PasswordGeneration />
</Box>
      </Box>
    </Container>
  );
};

