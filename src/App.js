import React, { useReducer } from 'react';
import './App.css';
import gook1 from './gook1.jpg';

function reducer(state, action){
  switch(action.type){
    case 'INTRODUCE':
      console.log(state.introducev);
      return { ...state, [state.introducev]: !state.introducev};
    case 'MENU':
      return { ...state, [state.menuv]: !state.menuv};
    case 'BOOK':
      return { ...state, [state.bookv]: !state.bookv};
    case 'PROMOTION':
      return { ...state, [state.promotionv]: !state.promotionv};
    default:
      return state;
  }
}


function App(){
  const [state, dispatch] = useReducer(reducer, {
    introducev: true,
    menuv: false,
    bookv: false,
    promotionv: false
  });

  return(
    <div>
      <img className='logo' src={gook1} alt='logo'/>
      <div className='menubar'>
        <button className='menubarButton' onClick={()=>{dispatch({ type: 'INTRODUCE'})}}>소개</button>
        <button className='menubarButton'>메뉴</button>
        <button className='menubarButton'>예약</button>
        <button className='menubarButton'>프로모션</button>
      </div>
      {state.introducev && <img src='./intro.jpg' alt='intro'/>}

    </div>
  );
}

export default App;
