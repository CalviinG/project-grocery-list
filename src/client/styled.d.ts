import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
