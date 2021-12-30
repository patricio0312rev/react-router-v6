import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar/Navbar.component';
import UserPage from './pages/UserPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/users' element={<UsersPage />} />

                <Route path='/users/new' element={<p>New User</p>} />
                <Route path='/users/:id' element={<UserPage />} />
                
                <Route path='/usuarios' element={<Navigate to='/users' />} />
                <Route path='/dashboard/*' element={<DashboardPage />} >
                    <Route path='welcome' element={<p>Welcome</p>} />
                    <Route path='goodbye' element={<p>Goodbye</p>} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
