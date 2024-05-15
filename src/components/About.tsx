import { Card, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('about')}
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">
            {t('dynatrace_title')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('dynatrace_duration')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('dynatrace_description')}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">
            {t('crealogix_title')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('crealogix_duration')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('crealogix_description')}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">
            {t('tsystems_junior_title')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('tsystems_junior_duration')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('tsystems_junior_description')}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">
            {t('tsystems_apprentice_title')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('tsystems_apprentice_duration')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('tsystems_apprentice_description')}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">
            {t('lifeinformatica_title')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('lifeinformatica_duration')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('lifeinformatica_description')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
