import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/home' exact={true} component={HomePage}></Route>
          <Route path='/about' exact={true} component={AboutPage}></Route>
          <Redirect path='*' to='/home'></Redirect>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
