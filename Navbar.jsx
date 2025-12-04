import {Link} from "react-router-dom";
import {useState,useEffect} from "react";

export default function Navbar(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{document.body.classList.toggle("dark",dark);},[dark]);

 return(<nav className="navbar">
  <div className="logo">Jatin.dev</div>
  <ul className="nav-links">
   <li><Link to="/">Home</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/projects">Projects</Link></li>
   <li><Link to="/skills">Skills</Link></li>
   <li><Link to="/contact">Contact</Link></li>
  </ul>
  <button className="theme-btn" onClick={()=>setDark(!dark)}>{dark?"☀️":"🌙"}</button>
 </nav>);
}