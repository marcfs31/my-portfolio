import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18nForTests';
import DarkModeToggle from './DarkModeToggle';

test('renders Toggle Dark Mode button', async () => {
  const toggleDarkMode = jest.fn();
  render(
    <I18nextProvider i18n={i18n}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </I18nextProvider>
  );
  await waitFor(() => {
    const button = screen.getByText(/Toggle Dark Mode/i);
    expect(button).toBeInTheDocument();
  });
});

test('button click calls toggleDarkMode', async () => {
    const toggleDarkMode = jest.fn();
    render(
        <I18nextProvider i18n={i18n}>
            <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        </I18nextProvider>
    );
    const button = screen.getByText(/Toggle Dark Mode/i);
    fireEvent.click(button);
    await waitFor(() => {
        expect(toggleDarkMode).toHaveBeenCalledTimes(1);
    });
});
