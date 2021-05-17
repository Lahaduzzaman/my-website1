import React from 'react';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import Project from './Components/Project/Project';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;