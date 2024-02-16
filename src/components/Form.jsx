"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import style from "../app/page.module.css"


const Form = () => {
    const [todos, setTodos] = useState([
        { 
            name: 'Leche',
            brand: '',
            quantity: 1,
            price: 2.5
        },
        { 
            name: 'Pan',
            brand: '',
            quantity: 2,
            price: 1.75
        }
    ]);

    const [todo, setTodo] = useState({ 
        name: '',
        brand: '',
        quantity: 0,
        price: 0
    });

    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });

    const handleClick = e => {
        e.preventDefault();
        if (Object.values(todo).some(value => value === '' || value === 0)) {
            alert('Por favor complete todos los campos');
            return;
        }
        setTodos([...todos, todo]);
        setTodo({ 
            name: '',
            brand: '',
            quantity: 0,
            price: 0
        });
    };

    const deleteTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre:</label><br />
                <input className={style.form_input} type="text" name='name' value={todo.name} onChange={handleChange} /><br />
                <label>Marca:</label><br />
                <input className={style.form_input} type="text" name='brand' value={todo.brand} onChange={handleChange} /><br />
                <label>Cantidad:</label><br />
                <input className={style.form_input} type="number" name='quantity' value={todo.quantity} onChange={handleChange} /><br />
                <label>Precio:</label><br />
                <input className={style.form_input} type="number" name='price' value={todo.price} onChange={handleChange} /><br />
                <button className={style.form_button} onClick={handleClick}>Agregar</button>
            </form>
            {todos.map((value, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={value} 
                    deleteTodo={deleteTodo}
                />
            ))}
        </>
    );
}

export default Form;
