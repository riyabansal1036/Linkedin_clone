import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import './firebase';
import { useEffect } from "react";
import { getUserAuth  } from "./actions";
function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {};
}
const mapDispatchToprops=(dispatch)=>({
  getUserAuth: ()=> dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToprops)(App);
