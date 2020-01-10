import React from 'react';
import LandingPage from './landingpage';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import {Switch,Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/contact" component={Contact}/>
    
  </Switch>

)

export default Main;
