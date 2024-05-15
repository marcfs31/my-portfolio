import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('dynatrace_title'),
      duration: t('dynatrace_duration'),
      description: t('dynatrace_description'),
    },
    {
      title: t('crealogix_title'),
      duration: t('crealogix_duration'),
      description: t('crealogix_description'),
    },
    {
      title: t('tsystems_junior_title'),
      duration: t('tsystems_junior_duration'),
      description: t('tsystems_junior_description'),
    },
    {
      title: t('tsystems_apprentice_title'),
      duration: t('tsystems_apprentice_duration'),
      description: t('tsystems_apprentice_description'),
    },
    {
      title: t('lifeinformatica_title'),
      duration: t('lifeinformatica_duration'),
      description: t('lifeinformatica_description'),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('about')}
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{experience.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.duration}
                </Typography>
                <Typography variant="body1" paragraph>
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
