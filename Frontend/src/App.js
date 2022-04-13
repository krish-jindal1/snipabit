import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Book from "./components/Book";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import {
  Routes, 
  Route
} from 'react-router-dom';
import Compose from "./components/Compose";

class App extends Component {

render(){
  return (
    <div>
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/blogbits" element={<Blog/>} />
            <Route path="/bookbits" element={<Book/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/post" element={<Post/>} />
            <Route path="/compose" element={<Compose/>} />
        </Routes>
        <Footer></Footer>
    </div>
  );}
}

export default App;
