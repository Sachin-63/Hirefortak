import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import AstrologersPage from './components/AstrologersPage';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <div className="App">
      <Router>
          <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/astrologers">
              <AstrologersPage/>
            </Route>
          </Switch>
          </div>
          <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
