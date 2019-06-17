import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageComp from "./Components/HomePage/homePage";
import SinglePageComp from "./Components/SinglePage/singlePage";
import PageNotFoundComp from "./Components/PageNotFound/pageNotFound";
import SignUpComp from "./Components/SignUp/signUp";
import SignInComp from "./Components/SignIn/signIn";
import AboutUsComp from "./Components/AboutUs/aboutUs";
import ContactComp from "./Components/Contact/contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = {HomePageComp}></Route>
          <Route path = "/CardDetail/:id" component = {SinglePageComp}></Route>
          <Route path = "/SignUp" component = {SignUpComp}></Route>
          <Route path = "/SignIn" component = {SignInComp}></Route>
          <Route path = "/AboutUs" component = {AboutUsComp}></Route>
          <Route path = "/Contact" component = {ContactComp}></Route>
          <Route component = {PageNotFoundComp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
