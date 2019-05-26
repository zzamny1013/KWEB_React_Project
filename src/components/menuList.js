import React, { Component } from 'react';
import menuListItem from './menuListItem.js';
class menuList extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render(){
        const { todos, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <menuListItem
                    id={id}
                    text={text}
                    checked={checked}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default menuList;