import React, { useReducer } from 'react';
import './App.css';
import gook1 from './gook1.jpg';
import logo from './logo.png';
import logoleft from './logoleft.png';
import logoright from './logoright.png';
import produce from 'immer';
import 'bootstrap/dist/css/bootstrap.css'
import intro from './intro.png';
import MenuImages from './components/menuImages.js';
import bookForm from './components/bookForm.js';


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
    <div className='container'>
      <div className='menubar'><img className='logo' src={logoleft} alt='logoleft'/><img className='logo' src={logo} alt='logo'/><img className='logo' src={logoright} alt='logoright'/></div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
          <a className="navbar-brand" href="#" onClick={()=>{dispatch({ type: 'INTRODUCE'})}}>청석골</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#" onClick={()=>{dispatch({ type: 'INTRODUCE'})}}>소개 <span class="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#" onClick={()=>{dispatch({ type: 'MENU'})}}> 메뉴</a>
          <a className="nav-item nav-link" href="#" onClick={()=>{dispatch({ type: 'BOOK'})}}>예약</a>
          <a className="nav-item nav-link" href="#" onClick={()=>{dispatch({ type: 'PROMOTION'})}}>프로모션</a>
          </div>
          </div>
          </nav>

      </div>
      {state.introducev && <img src={intro} alt='intro' className="img-thumbnail"/>}
      {state.menuv && <MenuImages></MenuImages>}
      {state.bookv && <bookForm></bookForm>}
      {state.promotionv && <img src='./promotion.jpg' alt='promotion'/>}

    </div>
  );
}

export default App;
