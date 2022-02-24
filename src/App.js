
import {  BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AboutUs from "./Pages/About us/AboutUs";
import ContactUs from "./Pages/Contact us/ContactUs";
import Details from "./Pages/Details/Details";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login";


import Register from "./Pages/Register/Register";






function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
         
          <Route path="/servicee/:serviceeId">
            <Details></Details>
     
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
         
        </Switch>
        <Route>
            <Footer></Footer>
          </Route>
      </BrowserRouter>
      </AuthProvider>

      
    </div>
  );
}

export default App;
