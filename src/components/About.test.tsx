import { render, screen, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18nForTests';
import About from './About';

test('renders About Me section', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <About />
    </I18nextProvider>
  );
  await waitFor(() => {
    const aboutElement = screen.getByText(/About Me/i);
    expect(aboutElement).toBeInTheDocument();
  });
});

test('renders Dynatrace job title', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <About />
    </I18nextProvider>
  );
  await waitFor(() => {
    const dynatraceTitle = screen.getByText(/Software Engineer at Dynatrace/i);
    expect(dynatraceTitle).toBeInTheDocument();
  });
});
