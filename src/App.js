import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Routes from './components/route';


function App() {


  return (
	<div className="App">
		  <Header/>		   
		  <Routes />
	</div>
  );
}

export default App;
