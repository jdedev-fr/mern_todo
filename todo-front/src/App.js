import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Pied from './components/footer/pied';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { conn: true }
  }
  render() {
    return (
      <Router>
        <Navbar conn={this.state.conn} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/disconnect">
            <Disconnect />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/">
            <Connect />
          </Route>
        </Switch>

        <Pied />
      </Router>
    )
  }
}

function Tasks() {
  return <h2>Tasks</h2>;
}

function Me() {
  return <h2>Me</h2>;
}

function Disconnect() {
  return <h2>Disconnect</h2>;
}
function Register() {
  return <h2>Register</h2>;
}
function Connect() {
  return <h2>Connect</h2>;
}


export default App;
