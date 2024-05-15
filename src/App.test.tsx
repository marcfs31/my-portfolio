import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18nForTests';

test('renders Marc Fors title', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  await waitFor(() => {
    const titleElement = screen.getByText(/Marc Fors/i);
    expect(titleElement).toBeInTheDocument();
  });
});

test('toggles dark mode', async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const button = screen.getByText(/Toggle Dark Mode/i);
  await waitFor(() => {
    expect(button).toBeInTheDocument();
  });
  fireEvent.click(button);
});
