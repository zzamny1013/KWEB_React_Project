import React, { Component } from 'react';
import StyledComponent from './components/menubutton.js';
import './App.css';
import gook1 from './gook1.jpg';
import './components/menuimage.css';

class App extends Component{

  state = {
    input: '',
    booking: [

    ],
  }

  handleChange = (e) =>{
    this.setState({
      input: e.target.value
    });
  }

  handleMenuChange = () =>{

  }

  handleBookingCreate = () =>{

  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleBookingCreate();
    }
  }

  handleBookingRemove = () =>{

  }

  render(){
    return(
    <fragment>
    <div className="App">
      <StyledComponent/>
    </div>
    <img className="image" src={gook1} alt="뼈해장국"/>
    <img className="image" src={gook1} alt="뼈해장국"/>
    <img className="image" src={gook1} alt="뼈해장국"/>
    <img className="image" src={gook1} alt="뼈해장국"/>
    <img className="image" src={gook1} alt="뼈해장국"/>
    </fragment> 
    );
  }
}

export default App;
