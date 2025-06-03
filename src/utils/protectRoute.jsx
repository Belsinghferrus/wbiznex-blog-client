import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import Spinner from './Spinner.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <Spinner />;  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
