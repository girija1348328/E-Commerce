import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import './index.css';
import App from './App.jsx';
import Container from '@mui/material/Container';

// Define light and dark themes
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b3b3b3',
          },
        }
      : {
          background: {
            default: '#ffffff',
            paper: '#f7f7f7',
          },
          text: {
            primary: '#000000',
            secondary: '#4f4f4f',
          },
        }),
  },
  typography: {
    fontFamily: 'Poppins, Inter, Arial, sans-serif',
  },
});

const AppWrapper = () => {
  // Detect system preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Create theme dynamically based on system preference
  const theme = createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={{
          xs: 'sm', // Use 'sm' width for extra-small devices
          sm: 'md', // Use 'md' width for small devices
          md: 'lg', // Use 'lg' width for medium devices
          lg: 'xl', // Use 'xl' width for large devices
        }}
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(0),
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <App />
      </Container>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
