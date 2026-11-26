import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProtectedRoute from './ProtectedRoute';

function HomeRedirect() {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white" role="status">
        Loading ShieldDesk...
      </main>
    );
  }

  return <Navigate to={user ? '/dashboard' : '/login'} replace />;
}

function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center text-white">
      <h1 className="text-3xl font-bold">Access denied</h1>
      <p className="max-w-md text-slate-400">
        Your account does not have permission to view this page.
      </p>
      <Link className="text-sky-400 hover:underline" to="/dashboard">
        Return to your workspace
      </Link>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
