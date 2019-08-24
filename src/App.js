import React from 'react';
import './App.css';
import Dogs from './components/Dogs';
import DogDetail from './components/DogDetail';
import Header from './components/Header';
import { DogProvider } from './providers/DogProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <DogProvider>
        <Header />
        <Route path="/" exact component={Dogs} />
        <Route path="/dog/:id" component={DogDetail} />
      </DogProvider>
    </Router>
  );
}

export default App;
