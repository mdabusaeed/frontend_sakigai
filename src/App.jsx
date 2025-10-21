// import { AuthProvider } from './hooks/auth.jsx';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from "react-router";

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App
