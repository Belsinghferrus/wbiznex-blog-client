
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './pages/EditBlog';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import Header from './components/Header';
import CreateBlog from './pages/CreateBlog';
import ProtectedRoute from './utils/protectRoute';
import useAuthStore from './store/authStore';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
    console.log('Checking authentication status...');
  }, []);

  return (
    <Router>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>} />
          <Route path="/admin/create" element={<ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>} />
          <Route path="/admin/edit/:id" element={<ProtectedRoute>
            <EditBlog />
          </ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
