
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './pages/EditBlog';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <Router>
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/create" element={<BlogDetails />} />
            <Route path="/admin/edit/:id" element={<EditBlog />} />
          </Routes>
        </main>
        <Footer />
   </Router>
  );
}

export default App;
