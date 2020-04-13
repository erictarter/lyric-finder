import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { LoadContextController } from './contextLoad';
import { ContextController } from './context';

function App() {
  return (
    <ContextController>
      <LoadContextController>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Index} />
                <Route
                  exact
                  path='/lyrics/:trackArtist/:trackTitle'
                  component={Lyrics}
                />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </LoadContextController>
    </ContextController>
  );
}

export default App;
