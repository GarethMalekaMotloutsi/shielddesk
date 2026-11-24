
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders the main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Get started' })
    ).toBeTruthy()
  })

  it('displays the initial counter value', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Count is 0' }))
      .toBeTruthy()
  })

  it('increments the counter when clicked', () => {
    render(<App />)

    const counterButton = screen.getByRole('button', {
      name: 'Count is 0',
    })

    fireEvent.click(counterButton)

    expect(
      screen.getByRole('button', { name: 'Count is 1' })
    ).toBeTruthy()
  })

  it('renders the documentation section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Documentation' })
    ).toBeTruthy()
  })

  it('renders the community section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Connect with us' })
    ).toBeTruthy()
  })
})
