import React from 'react';
import './menuListTemplete.css';

const menuListTemplete = ({form, children}) => {
    return (
        <main className="todo-list-templete">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default menuListTemplete;