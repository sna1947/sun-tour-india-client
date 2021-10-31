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
import OrderNow from './components/OrderNow/OrderNow';
import initializeAuthencation from './Firebase/firebase.initialize';
import LogOut from './components/LogOut/LogOut';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TourDetails from './components/TourDetails/TourDetails';
import OrderPlace from './components/OrderPlace/OrderPlace';
import UpdateOrders from './components/UpdateOrders/UpdateOrders';

initializeAuthencation();

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>


          <Route path='/home'>
            <Home></Home>
          </Route>
          {/* <Route path='/tour/:tourId'>
          <Tours></Tours>
          </Route> */}
          
           {/* <Route path='/tours'>
              <Tours></Tours>
           </Route> */}
           <PrivateRoute path='/tours'>
              <Tours></Tours>
           </PrivateRoute>
           <Route path='/tourdetails'>
             <TourDetails></TourDetails>
           </Route>


           {/* <Route path='/ordernow'>
              <OrderNow></OrderNow>
           </Route> */}

           <PrivateRoute path='/ordernow/:id'>
              <OrderNow></OrderNow>
           </PrivateRoute>
            <Route path='/orderplace'>
              <OrderPlace></OrderPlace>
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

          <Route path='/updateorders/:id'>
            <UpdateOrders></UpdateOrders>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/login'>
          <Login></Login>
          </Route>

          <Route path='/logout'>
          <LogOut></LogOut>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
         

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
