import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Contact from './pages/Contact/Contact';
import CookMaster from './pages/CookMaster/CookMaster';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/cookmaster">
            <CookMaster></CookMaster>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
