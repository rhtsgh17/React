import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import Login from './page/login.component';
import SignUp from './page/signup.component';
import Forgot from './page/forgot.component';
import Reset from './page/reset.component';
import Dashboard from './page/Dashboard';
import Detail from './page/Detail';
import Keranjang from './page/keranjang';
import ProtectRoutes from './routers/protectRoute';
function App() {
  return (
    <section>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container"></div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/reset-password/:id/:token" element={<Reset />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectRoutes>
                    <Dashboard />
                  </ProtectRoutes>
                }
              />

              <Route
                path="/produk/detail/:uuid"
                element={
                  <ProtectRoutes>
                    <Detail />
                  </ProtectRoutes>
                }
              />

              <Route
                path="/keranjang"
                element={
                  <ProtectRoutes>
                    <Keranjang />
                  </ProtectRoutes>
                }
              />

              <Route
                path="*"
                element={<Navigate to={'/sign-in'} replace={true} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
