import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from "./Main";
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
   <Router>
        <div>
          <Route path='/' component={Main}/>
          <Route exact path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root'));

    registerServiceWorker();
