import './App.css';
import {Navigate} from "react";
import { Routes, Route, Router } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Service from './components/Service';
import Contanct from './components/Contact';
import TermOfService from './components/TermOfService';
import News from './components/News';
import Editor from './components/Editor';

// import Login from './pages/Login/Login';
import DefautPage from './pages/MainPage/DefautPage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Homepage from './pages/MainPage/Homepage';

axios.defaults.baseURL = "http://localhost:3000/";

function App() {

  const token = useSelector((state) => state.auth.token);
  return (
    <div className="App">
      <NavBar />
      
     
    </div>
  );
}

export default App;
