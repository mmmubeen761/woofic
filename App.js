import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Loginn from "./Components/Loginn";
import Signupp from "./Components/Signupp";
import Dashboard from "./Components/ClientPortal/Dashboard";
import AdminDashboard from "./Components/AdminPortal/AdminDashboard";
import ServiceProvider from './Components/ServiceProviderForm'
import Client from './Components/Client';
import Supplier from "./Components/Supplier";
import UpdateProfile from './Components/ClientPortal/UpdateProfile'
import AdminUpdateProfile from './Components/AdminPortal/UpdateProfile'
import AddService from './Components/ClientPortal/AddService';
import Feedback from './Components/ClientPortal/Feedback';
import ApproveReg from './Components/AdminPortal/ApproveReg';
import SupplierDashboard from './Components/SupplierPortal/SupplierDashboard';
import Quotation from './Components/SupplierPortal/Quotation';
import Chat from './Components/ClientPortal/Chat';
import Blog from './Components/ClientPortal/Blog';
import Todo from './Components/ClientPortal/Todo';
import Help from './Components/ClientPortal/Help';
import Complain from './Components/ClientPortal/Complain';
// import StoreUpdate from './Components/StoreUpdate';
// import Orders from './Components/Orders';
// import EditProduct from './Components/EditProduct'
// import EditCategory from './Components/EditCategory'
// import EditStatus from './Components/EditStatus'

function App() {
  return (
  <Router>
    <div className="App">
          <Switch>

            <Route exact path="/" component={Login} />
            <Route exact path="/loginn" component={Loginn} />
            <Route exact path="/signupp" component={Signupp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/admindashboard" component={AdminDashboard} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/serviceprovider" component={ServiceProvider} />
            <Route exact path="/supplier" component={Supplier} />
            <Route exact path="/updateprofile" component={UpdateProfile} />
            <Route exact path="/adminupdateprofile" component={AdminUpdateProfile} />
            <Route exact path="/addservice" component={AddService} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/approvereg" component={ApproveReg} />
            <Route exact path="/supplierdashboard" component={SupplierDashboard} />
            <Route exact path="/quotation" component={Quotation} />
            <Route path="/chat" component={Chat} />
            <Route path="/blog" component={Blog} />
            <Route path="/todo" component={Todo} />
            <Route path="/help" component={Help} />
            <Route path="/complain" component={Complain} />
            {/* 
            <Route path="/update/:User" component={User} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/editcategory/:cid" component={EditCategory} />
            <Route path="/editstatus/:sid" component={EditStatus} />
             */}
          </Switch>
        </div>
    
    </Router>
  );
}

export default App;