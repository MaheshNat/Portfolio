import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Software from './components/Software';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import ReactGa from 'react-ga';
import axiosDefaults from 'axios/lib/defaults';

axiosDefaults.baseURL = 'http://mnat.herokuapp.com/api';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  componentDidMount() {
    console.log(process.env);
    if (process.env.NODE_ENV === 'production')
      ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/software" component={Software} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
