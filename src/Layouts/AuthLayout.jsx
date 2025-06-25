import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
          <header>
            <Header></Header>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
        </div>
    );
};

export default AuthLayout;