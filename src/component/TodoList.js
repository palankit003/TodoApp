import React from 'react'
import './TodoList.css'
export const TodoList = (props) => {

    
    return( 
        <div className='todo_style'>
            <button onClick={()=>{
                props.onSelect(props.id)
            }
                }>x</button>
    <li> {props.text} </li>
    </div>
     );
}
