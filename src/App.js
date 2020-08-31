import React from 'react';
import './App.css';
import Home from '../src/components/Home/Home';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
