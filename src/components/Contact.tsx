import { Container, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('contact')}
      </Typography>
      <Typography variant="body1">
        {t('email')}: <Link href="mailto:marcfs31@gmail.com">marcfs31@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        {t('linkedin')}: <Link href="https://www.linkedin.com/in/marc-fors/" target="_blank" rel="noopener noreferrer">linkedin.com/in/marc-fors</Link>
      </Typography>
    </Container>
  );
};

export default Contact;
