import { render, screen, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18nForTests';
import Contact from './Contact';

test('renders Contact section', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Contact />
    </I18nextProvider>
  );
  await waitFor(() => {
    const contactElement = screen.getByText(/Contact/i);
    expect(contactElement).toBeInTheDocument();
  });
});

test('renders email', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Contact />
    </I18nextProvider>
  );
  await waitFor(() => {
    const emailElement = screen.getByText(/marcfs31@gmail.com/i);
    expect(emailElement).toBeInTheDocument();
  });
});

test('renders LinkedIn link', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Contact />
    </I18nextProvider>
  );
  await waitFor(() => {
    const linkedinElement = screen.getByText(/linkedin.com\/in\/marc-fors/i);
    expect(linkedinElement).toBeInTheDocument();
  });
});
