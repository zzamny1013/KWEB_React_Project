import menu1 from '../gook1.jpg';
import logo from '../logo.JPG';
import React, { useState } from 'react';
import produce from 'immer';
import 'bootstrap/dist/css/bootstrap.css';
import './menuImage.css';

const MenuImages = () => {
  const [visible, setVisible] = useState({
    v1: true,
    v2: true,
    v3: true,
    v4: true,
    v5: true,
    lv1: false,
    lv2: false,
    lv3: false,
    lv4: false,
    lv5: false
  });
    return(
        <p>
          {visible.lv1 && <img src={logo} alt='largemenu1' className='img-thumbnail' onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = true; draft.v2 = true; draft.v3 = true; draft.v4 = true; draft.v5 = true; draft.lv1 = false;}))}}/>}
          {visible.lv2 && <img src={logo} alt='largemenu2' className='img-thumbnail' onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = true; draft.v2 = true; draft.v3 = true; draft.v4 = true; draft.v5 = true; draft.lv2 = false;}))}}/>}
          {visible.lv3 && <img src={logo} alt='largemenu3' className='img-thumbnail' onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = true; draft.v2 = true; draft.v3 = true; draft.v4 = true; draft.v5 = true; draft.lv3 = false;}))}}/>}
          {visible.lv4 && <img src={logo} alt='largemenu4' className='img-thumbnail' onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = true; draft.v2 = true; draft.v3 = true; draft.v4 = true; draft.v5 = true; draft.lv4 = false;}))}}/>}
          {visible.lv5 && <img src={logo} alt='largemenu5' className='img-thumbnail' onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = true; draft.v2 = true; draft.v3 = true; draft.v4 = true; draft.v5 = true; draft.lv5 = false;}))}}/>}

          {visible.v1 && <img src={menu1} alt="menu1" className="img-thumbnail" onClick={()=>setVisible(produce(visible, draft=>{draft.v1 = false; draft.v2 = false; draft.v3 = false; draft.v4 = false; draft.v5 = false; draft.lv1 = true;}))}/>}
          {visible.v2 && <img src={menu1} alt="menu2" className="img-thumbnail" onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = false; draft.v2 = false; draft.v3 = false; draft.v4 = false; draft.v5 = false; draft.lv2 = true;}))}}/>}
          {visible.v3 && <img src={menu1} alt="menu3" className="img-thumbnail" onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = false; draft.v2 = false; draft.v3 = false; draft.v4 = false; draft.v5 = false; draft.lv3 = true;}))}}/>}
          {visible.v4 && <img src={menu1} alt="menu4" className="img-thumbnail" onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = false; draft.v2 = false; draft.v3 = false; draft.v4 = false; draft.v5 = false; draft.lv4 = true;}))}}/>}
          {visible.v5 && <img src={menu1} alt="menu5" className="img-thumbnail" onClick={()=>{setVisible(produce(visible, draft=>{draft.v1 = false; draft.v2 = false; draft.v3 = false; draft.v4 = false; draft.v5 = false; draft.lv5 = true;}))}}/>}
        </p>
    );
};

export default MenuImages;