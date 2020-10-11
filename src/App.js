import React, { Component } from 'react';

import {Route , Switch} from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { }
  }




  render() { 





    return ( 
      <div className="App">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route component={NotFound}/>

        </Switch>

          
      </div >
      
     );
  }
}
 
export default App;