import { render, screen } from '@testing-library/react';
import App from './App';

test('renders components in App', () => {
  render(<App />);
  
  // Check for elements by their data-testid
  expect(screen.getByTestId('hero-component')).toBeInTheDocument();
  expect(screen.getByTestId('service-component')).toBeInTheDocument();
  expect(screen.getByTestId('blog-component')).toBeInTheDocument();
  expect(screen.getByTestId('infrastructure-component')).toBeInTheDocument();
  expect(screen.getByTestId('navbar-component')).toBeInTheDocument();
  expect(screen.getByTestId('customer-component')).toBeInTheDocument();
  expect(screen.getByTestId('performance-component')).toBeInTheDocument();
  expect(screen.getByTestId('products-component')).toBeInTheDocument();
  expect(screen.getByTestId('testimonial-component')).toBeInTheDocument();
  expect(screen.getByTestId('trust-component')).toBeInTheDocument();
  expect(screen.getByTestId('visual-component')).toBeInTheDocument();
  expect(screen.getByTestId('footer-component')).toBeInTheDocument();
});
