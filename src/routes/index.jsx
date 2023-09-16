import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard/StudentDashboard';

const AppRouter = () => {
    console.log('R')
    return (
        <Routes>
            <Route path="/" element={<StudentDashboard />} />
        </Routes>
    );
}

export default AppRouter;
