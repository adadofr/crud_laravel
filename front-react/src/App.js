import React from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import './Style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/admin' component={Admin} />
            </Switch>
          </div>
        </Router>
    
  );
}

export default App;
