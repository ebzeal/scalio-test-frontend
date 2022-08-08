import React from 'react';
import Home from './component/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Details from './component/Details';

const styles = {
  body : {
    width: "100%",
    padding: "3% 5%",
  }
}

function App() {
  return (
    <Router>
      <div style={styles.body}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/*" element={<Details/>}/>
      </Routes>
      </div>
    </Router>
    );
}

export default App;
