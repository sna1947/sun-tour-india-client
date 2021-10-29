import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Tours from './components/Tours/Tours';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/tour/:tourId'>
          <Tours></Tours>
          </Route>
          
           <Route path='/tours'>
              <Tours></Tours>
           </Route>
           
          <Route path='/about'>
            <About></About>
          </Route>
          {/* <Route path='/admin'>
            <Admin></Admin>
          </Route> */}
          {/* <Route path='/blog'>
            <Blog></Blog>
          </Route> */}
          <Route path='./contact'>
            <Contact></Contact>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route path='/notfound'>
            <NotFound></NotFound>
          </Route>
         

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
