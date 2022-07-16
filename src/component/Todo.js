import React, { useState } from 'react'
import './Todo.css'
import { TodoList } from './TodoList';
const Todo = () => {
    const [item,setItem] = useState("");
    const [items,setItems] = useState([])
    const itemEvent = (e) =>{
        setItem((e.target.value))
    }
    const listOfItems = () => {
        setItems((oldItems)=>{
            return [...oldItems,item]
        })
        setItem("")
    }
    const deleteItems = (id) => {
        console.log("deleted")

        setItems((oldItems)=> {
            return oldItems.filter((arrElm,index)=>{
                return index !== id;
            })
        })
    }
  return (
    <div className='center'>
        <h2>Todo List</h2>
        <input type="text" value={item} placeholder= "Add Your Task" onChange={itemEvent}></input>
        <button onClick={listOfItems}>+</button>
        <ol>
            {items.map((itemValue,index)=>{
                return <TodoList 
                key ={index} 
                id={index}
                text={itemValue} 
                onSelect = {deleteItems}
                />
            })}
        </ol>
    </div>
  )
}

export default Todo