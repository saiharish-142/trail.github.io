import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Tool';
import ImageGridList from './components/grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Router>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <PrimarySearchAppBar />
              <Switch>
                <Route path="/activedrivers" component={ImageGridList} />
              </Switch>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
