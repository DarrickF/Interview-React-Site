import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';

function App() {
  return (
<>
<Router>
     <Nav />
     <Routes>
     <Route path='/' exact />
      </Routes>
     </Router>
      </>
  );
}

export default App;
