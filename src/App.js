import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Billing from './components/Billing';
const App = () => {
  const appStyle = {
    backgroundColor: 'ultraviolet',
    // Add more styles as needed
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/billing" element={<Billing />} />
                {/* Add more routes as needed */}
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
