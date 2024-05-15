import { Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DarkModeToggleProps {
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode }) => {
  const { t } = useTranslation();

  return (
    <Button variant="contained" color="primary" onClick={toggleDarkMode}>
      {t('toggle_dark_mode')}
    </Button>
  );
};

export default DarkModeToggle;
