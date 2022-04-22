import React, { Component } from 'react'
import  { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom'
import Home from './Home';
import Blogs from './Blogs';
import NavBar from './NavBar'
import Footer from './Footer';
import Design from './Design';
import './App.css'

class App extends Component{
  render(){
    return (
      
      <Router>
       <NavBar />

      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/design" element={<Design/>} />
       
       
      </Routes>
      <Footer/>
    </Router>
  );
     
  }
 
}

export default App;


//This was supposed to go in the function but it doesn't work that way. It only works with them out
//<Route exact path="/" component={Home}/>
//<Route exact path="/Blogs" component={Blogs}/>

//<nav className='Navbar'>
      // <ul>
      //     <li>
      //         <NavLink to="/">Home</NavLink>
      //     </li>
       //    <li>
      //         <NavLink to="/blogs">Blogs</NavLink>
       //    </li>
      // </ul>
      // </nav>
   
      // <Route exact path="/" component={Home}/>
      // <Route exact path="/blogs" component={Blogs}/>
        