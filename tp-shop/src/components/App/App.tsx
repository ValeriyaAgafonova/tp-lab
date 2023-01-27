import "./App.scss";
import Information from "../../pages/Information/Information";
import MainList from "../../pages/MainList/MainList";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
function App() {

  return (
    <Switch>
      <React.Fragment>
        <div className="App">
          <Route path="/" exact={true}>
            <MainList />
          </Route>
          <Route path="/information/:id">
            <Information />
          </Route>
        </div>
      </React.Fragment>
    </Switch>
  );
}

export default App;
