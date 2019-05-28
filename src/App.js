import React, { useReducer } from 'react';
import './App.css';
import gook1 from './gook1.jpg';
import logo from './logo.JPG';
import produce from 'immer';

function reducer(state, action){
  switch(action.type){
    case 'INTRODUCE':
      console.log(state.introducev);
      return produce(state, draft=>{
        draft.introducev = true;
        draft.menuv = false;
        draft.bookv = false;
        draft.promotionv = false;
      });
    case 'MENU':
      console.log(state.menuv);
      return produce(state, draft=>{
        
        draft.introducev = false;
        draft.menuv = true;
        draft.bookv = false;
        draft.promotionv = false;
      });
    case 'BOOK':
      console.log(state.bookv);
      return produce(state, draft=>{
        
        draft.introducev = false;
        draft.menuv = false;
        draft.bookv = true;
        draft.promotionv = false;
      });
    case 'PROMOTION':
        console.log(state.promotionv);
      return produce(state, draft=>{
        draft.introducev = false;
        draft.menuv = false;
        draft.bookv = false;
        draft.promotionv = true;
      });
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
      <img className='logo' src={logo} alt='logo'/>
      <div className='menubar'>
        <button className='menubarButton' onClick={()=>{dispatch({ type: 'INTRODUCE'})}}>소개</button>
        <button className='menubarButton' onClick={()=>{dispatch({ type: 'MENU'})}}>메뉴</button>
        <button className='menubarButton' onClick={()=>{dispatch({ type: 'BOOK'})}}>예약</button>
        <button className='menubarButton' onClick={()=>{dispatch({ type: 'PROMOTION'})}}>프로모션</button>
      </div>
      {state.introducev && <img src='./intro.jpg' alt='intro'/>}
      {state.menuv && <img src='./menu.jpg' alt='menu'/>}
      {state.bookv && <img src='./book.jpg' alt='book'/>}
      {state.promotionv && <img src='./promotion.jpg' alt='promotion'/>}

    </div>
  );
}

export default App;
