import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { ProtectedRoute } from './components/auth/ProtectedRoute.jsx';
import { Home } from './pages/Home.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import { EditPost } from './pages/EditPost.jsx';
import { PostPage } from './pages/PostPage.jsx';
import About from './pages/About.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import { NotFound } from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-post" element={<Layout><ProtectedRoute><CreatePost /></ProtectedRoute></Layout>} />
          <Route path="/edit-post/:id" element={<Layout><ProtectedRoute><EditPost /></ProtectedRoute></Layout>} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;