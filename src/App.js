import React from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home/pages/Home'
import Store from './Store/pages/Store'
import Notification from './Notification/pages/Notification';
import About from './About/pages/About';
import Item from './Notification/pages/Item'
import Product from './Store/pages/Product'
function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/store" exact component={Store}/>
          <Route path="/product/:id" exact component={Product}/>
          <Route path="/notifications" exact component={Notification}/>
          <Route path="/notifications/:id" exact component={Item}/>
          <Route path="/about" exact component={About}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
