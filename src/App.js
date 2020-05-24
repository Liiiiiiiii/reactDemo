import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import index from './web/index/index'
import login from './web/login/login'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={index}></Route>
        <Route path="/login" component={login}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
