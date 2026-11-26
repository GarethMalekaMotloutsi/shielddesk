import type { PropsWithChildren } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

vi.mock('./contexts/AuthContext', () => ({
  AuthProvider: ({ children }: PropsWithChildren) => children,
  useAuth: () => ({
    user: null,
    session: null,
    profile: null,
    loading: false,
    signOut: vi.fn(),
    refreshProfile: vi.fn(),
  }),
}));

describe('ShieldDesk routes', () => {
  it('renders the login page at /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'ShieldDesk' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeTruthy();
  });

  it('redirects the home page to the login page when signed out', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'ShieldDesk' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeTruthy();
  });

  it('renders the registration page at /register', () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Create your account' })).toBeTruthy();
  });
});
