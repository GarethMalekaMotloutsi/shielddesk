import { Navigate, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>ShieldDesk</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;