import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
//import useSettings from '../src/hooks/useSettings';
import palette from './palette';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

//for now create themeMode here
const themeMode = 'dark';

//const { themeMode } = useSettings();
const isItLight = themeMode === 'light';

// Create a theme instance.
const theme = createTheme({
  palette: isItLight ? palette.light : palette.dark,
});
export default theme;
