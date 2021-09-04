import React, { useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  useEffect(() => {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      alert('get data from main react: ' + JSON.stringify(window.microApp.getData()));
    }
  }, []);

  return (
    // 👇👇 添加路由前缀，子应用可以通过window.__MICRO_APP_BASE_URL__获取基座下发的baseurl
    <BrowserRouter basename={window.__MICRO_APP_BASE_URL__ || '/'}>
      <h1>Child React App</h1>
      <p>Got data from main-react: {}</p>
      <nav>
        <ul>
          <li>
            <NavLink to='/first'>FirstPage</NavLink>
          </li>
          <li>
            <NavLink to='/second'>SecondPage</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/first' component={FirstPage}></Route>
        <Route path='/second' component={SecondPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
