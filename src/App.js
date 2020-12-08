import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import DashBoardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

import './App.css';
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path='/' render={ props =>
          <HomePage />
        }/>
        <Route exact path='/dashboard' render={ props =>
          <DashBoardPage />
        }/>
        <Route exact path='/signup' render={ props =>
          <SignupPage />   
        }/>    
        <Route exact path='/login' render={ props =>
          <LoginPage />
        }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
