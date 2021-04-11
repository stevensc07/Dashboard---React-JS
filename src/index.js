import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/dasboard';
import Reports from './components/reports'
import Settings from './components/settings'
import Index from '../src/views/private/home/dashboard/index'
import 'antd/dist/antd.css';
const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/reports" component={Reports}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/index" component={Index}></Route>
    </React.Fragment>
  </BrowserRouter>

);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
