import React, { Component } from 'react';
import './menuListItem.css';

class menuListItem extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }
    render(){
        const { text, checked, id, onRemove } = this.props;

        console.log(id);
        return (
            <div className = "todo-item">
                <div className = "remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default menuListItem;