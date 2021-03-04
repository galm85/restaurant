import './App.css';
import {Provider} from 'react-redux';
import {Switch,Route} from 'react-router-dom';
import store from './redux/store';
//components
import Navbar from './components/navbar';

//pages
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Products from './pages/products';
import FullPageProduct from './pages/fullPageProduct';
import Register from './pages/register';
import myOrders from './pages/myOrders';
import EditUser from './pages/editUser';
import Jobs from './pages/jobs';

//Admin
import Dashboard from './admin/dashboard';
import Signin from './pages/signin';
import Logout from './pages/logout';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>

      <div className="d-flex flex-column min-vh-100">
        <header><Navbar/></header>
        <main className="flex-fill">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/menu/:category" component={Products} />
            <Route path="/admin" component={Dashboard}/>
            <Route exact path="/menu/:category/:product" component={FullPageProduct}/>
            <Route path="/register" component={Register}/>
            <Route path="/sign-in" component={Signin}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/orders" component={myOrders}/>
            <Route path="/edit-user" component={EditUser}/>
            <Route path="/jobs" component={Jobs}/>
          </Switch>
        </main>
        <footer className="mt-5">
          {/* <div className="p-2" style={{backgroundColor:"black",color:"white"}}>
            <p className="p-2 text-center">Gal Mizrahi &copy; {new Date().getFullYear()} </p>
          </div> */}
          <Footer/>
          
        </footer>
      </div>
  
    </Provider>
  );
}

export default App;
