import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('contact')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="body1">
              {t('email')}: <Link href="mailto:marcfs31@gmail.com">marcfs31@gmail.com</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="body1">
              {t('linkedin')}: <Link href="https://www.linkedin.com/in/marc-fors/" target="_blank" rel="noopener noreferrer">linkedin.com/in/marc-fors</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
