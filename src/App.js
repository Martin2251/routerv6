import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';


function App() {

  // the nav is showing on every single page 
  // the error page is always at the bottom and astris it
  return (
   <Router>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/About"> About</Link>
       <Link to="/Profile">Profile</Link>
     </nav>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="•" element={<ErrorPage />}/>
     </Routes>
   </Router>
  );
}

export default App;
