import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

test('renders hero heading', () => {
  render(<Hero />);
  expect(
    screen.getByRole('heading', { name: /Ram Prasad/i }),
  ).toBeInTheDocument();
});
