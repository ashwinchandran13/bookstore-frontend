import React from 'react'
import Footer from './Layout/Footer.component'
import Header from './Layout/Header.component'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/Login/Login.page';
import RegisterPage from './Pages/Register/Register.page';
import UserVerificationPage from './Pages/UserVerification/UserVerification.page';
import DashboardPage from './Pages/Dashboard/Dashboard';
import Toast from './Components/toast/toast';


const App = () => {
  return (
      <Router>
        <div className="default-layout">
          <header className="header mb-2">
            <Header />
            <Toast />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/registration" component={RegisterPage} />
              <Route exact path="/verify/:_id/:email" component={UserVerificationPage}/>
              <Route exact path="/dashboard" component={DashboardPage}>

					</Route>
            </Switch>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
  );
}

export default App;
