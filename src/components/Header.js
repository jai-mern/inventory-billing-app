import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 style={{backgroundColor : 'green' }}>Inventory Billing App</h1>

      <nav>
        <ul>
        <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/billing">Billing</a></li>
    
        </ul>
      </nav>

      <div className="user-info">
        <span style={{ color: 'red' }}>Welcome to jaihind</span>
        {/* Add more user-related information or actions */}
      </div>

      {/* Additional header content */}
      <p>This is additional content in the header.</p>

      {/* Add any other header content */}
    </header>
  );
};

export default Header;
