import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

test('shows confirmation after submit', async () => {
  render(<Contact />);
  const form = document.querySelector('form')!;
  fireEvent.submit(form);
  expect(await screen.findByRole('alert')).toHaveTextContent(/Message sent/i);
});
