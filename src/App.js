import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import Products from './components/pages/ProductsPage';
import SingleProducts from './components/pages/SingleProductsPage';
import Cart from './components/pages/CartPage';
import Default from './components/pages/DefaultPage';
import Contact from './components/pages/ContactPage';

import Navbar from './components/atoms/Navbar';
import Sidebar from './components/atoms/Sidebar';
import SideCart from './components/atoms/SideCart';
import Footer from './components/atoms/Footer';

const App = () => {
  return (
    <>
      {/*Navbar, Sidebar, SideCart, Footer  */}
      
      <Router>
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id' >
            <SingleProducts />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
