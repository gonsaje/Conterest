import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ConIndexContainer from'./cons/cons_index_container';
import ConShowContainer from './cons/con_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <ProtectedRoute path="/" component={NavBarContainer} />
      <ProtectedRoute exact path="/feed" component={ConIndexContainer} />  
      <ProtectedRoute exact path="/cons/:id" component={ConShowContainer} />  
      <AuthRoute exact path='/splash'component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
