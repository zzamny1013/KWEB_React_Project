import react, { Component } from 'react';
import './menuimage.css';
import gook1 from '../gook1.jpg';

class menuIamge extends Component{
    render(){
        const { visible, onMenuChange } = this.props;
        return(
            <img className="image" src={gook1} alt="뼈해장국"/>

        );
    }
}