import React from 'react';
import Navbar from './Navbar';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;