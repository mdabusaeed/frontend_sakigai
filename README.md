# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Authentication System

This project includes a complete authentication system with:

### Features
- Email/Password authentication
- Google OAuth integration
- JWT token management
- Token refresh functionality
- Protected routes
- User context management

### Setup

1. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables:
   - `VITE_GOOGLE_CLIENT_ID`: Your Google OAuth client ID
   - `VITE_API_BASE_URL`: Your backend API URL (default: http://127.0.0.1:8000)

3. For Google authentication, you'll need to:
   - Create a project in the Google Cloud Console
   - Enable the Google+ API
   - Create OAuth 2.0 credentials
   - Add your domain to the authorized origins

### Backend Requirements

The authentication system expects the following API endpoints:
- `POST /api/v1/auth/login/` - Email/password login
- `POST /api/v1/auth/google/` - Google OAuth login
- `POST /api/v1/auth/register/` - User registration
- `POST /api/v1/auth/token/refresh/` - Token refresh
- `GET /api/v1/auth/user/` - Get current user info

### Usage

The authentication system provides:
- `useAuth()` hook for accessing authentication state and functions
- `ProtectedRoute` component for protecting routes
- `AuthProvider` component for wrapping your app

Example usage:
```jsx
import { useAuth } from '../hooks/auth.jsx';

const MyComponent = () => {
  const { user, login, logout } = useAuth();
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.first_name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login('email', 'password')}>Login</button>
      )}
    </div>
  );
};
```