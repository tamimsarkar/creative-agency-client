import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Homepage/Home/Home';
import Login from './components/Login/Login';
import UserDashboard from './components/UserDashboard/UserDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
export const UserContext = createContext();
export const ServiceContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  const [servicee,setServicee] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[servicee,setServicee]}>
   <Router>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route  path="/home">
         <Home />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <PrivateRoute path="/user-dashboard">
         <UserDashboard />
       </PrivateRoute>
       <PrivateRoute path="/admin-dashboard">
         <AdminDashboard />
       </PrivateRoute>
       {/* <Route path="*">
         <NotFound />
       </Route> */}
     </Switch>
   </Router>

   </ServiceContext.Provider>
   </UserContext.Provider >
  );
}

export default App;
