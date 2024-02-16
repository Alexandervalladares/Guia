import React from 'react';
import style from "../app/page.module.css";

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <div className={style.list}>
            <h3 className='Titulo3'>{todo.name}</h3>
            <p>Marca: {todo.brand}</p>
            <p>Cantidad: {todo.quantity}</p>
            <p>Precio: {todo.price}</p>
            <button className={style.btn_delete} onClick={() => deleteTodo(index)}>X</button>
        </div>
    );
}

export default Todo;