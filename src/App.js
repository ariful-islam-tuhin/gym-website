
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import AboutUs from "./Pages/About us/AboutUs";
import ContactUs from "./Pages/Contact us/ContactUs";
import Header from "./Pages/Home/Header/Header";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Home/Services/Services";






function App() {
  return (
    <div>

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

          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
