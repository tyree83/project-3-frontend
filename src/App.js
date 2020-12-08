import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import DashBoardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <DashBoardPage />
      <HomePage />
      <LoginPage />
      <SignupPage />
      <Footer />
    </div>
  );
}

export default App;
