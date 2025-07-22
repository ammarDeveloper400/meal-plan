/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from '@mui/material';
// Function to get MUI colors
export const getMuiColors = () => {
  const theme = useTheme();
  // Returning an object with primary and secondary colors
  return {
    primaryColor: theme.palette.primary.main,
    secondaryColor: theme.palette.secondary.main,
    primaryColorText: theme.palette.primary.light,
    // primaryColorTextB: theme.palette.primary.dark,
    // primaryColorTextC: theme.palette.primary.darker,
  };
};