import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const { getByTestId } = render(<App />);
  expect(getByTestId('hero-component')).toBeInTheDocument();
  expect(getByTestId('best-service-provider-component')).toBeInTheDocument();
  expect(getByTestId('footer-component')).toBeInTheDocument();
});
