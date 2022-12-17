import React, { useContext } from 'react';

import { AuthContext } from '../context/Auth.context.js';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <div className="row">

      <div className="col-sm-8">
        <h1>
          Hello Admin
        </h1>
      </div>

      <div className="col-sm-4">
        <h1>
          <a href="#" onClick={onLogout}>Logout</a>
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;