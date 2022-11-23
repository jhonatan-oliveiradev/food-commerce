import { render, screen } from '@testing-library/react'
import App from './App'

test('renders samurai', () => {
  render(<App />)
  const linkElement = screen.getByText(/samurai/i)
  expect(linkElement).toBeInTheDocument()
})
