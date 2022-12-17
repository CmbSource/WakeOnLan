import React, {useContext} from "react";

import { AuthContext } from './context/Auth.context.js';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Dashboard />
}

export default App;