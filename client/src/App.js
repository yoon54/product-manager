import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'

import Product from './components/Product'
import ViewProduct from './components/ViewProduct'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
  return (
    <div className="container">
      <div>
      <Router>
        <Product path = "/"/>
        <ViewProduct path = "/product/:_id"/>
        <Edit path = "/product/edit/:_id"/>
      </Router>
      </div>
    </div>
  );
}

export default App;
