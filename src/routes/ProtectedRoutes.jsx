import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isUserAuthenticated = !!localStorage.getItem("AUTH-TOKEN");

    return isUserAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/auth" replace={true} />
    );
};

export default ProtectedRoutes;
