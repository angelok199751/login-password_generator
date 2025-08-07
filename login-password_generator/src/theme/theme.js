import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f0e6', // очень светлый бежевый фон страницы
    },
    text: {
      primary: '#3a3a36', // светло-чёрный, чуть бежеватый цвет текста
      secondary: '#6b665b', // для менее важных текстов — более приглушённый
    },
    primary: {
      main: '#8b7355', // теплый коричневатый акцент, например для кнопок
      contrastText: '#f5f0e6', // светлый цвет текста на кнопках
    },
    // Можно добавить цвета для success, error и прочих, если нужно
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    // Можно настроить размеры шрифтов, если хочешь
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // чтобы кнопки не были капсом
          borderRadius: '8px',
          padding: '8px 16px',
        },
      },
    },
  },
});

export default theme;