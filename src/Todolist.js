import React from 'react';

function Todolist(props) {
	const completedStyle = {
		textDecoration: "line-through",
		fontType: "italic",
		color: "#cdcdcd"
	}
	return(
 		<div className="todo-item">
	 		<input 
		 		type="checkBox"
		 		checked={props.item.completed}
		 		onChange={() => props.handleChange(props.item.id)}
	 		/>
	 		<p style={ props.item.completed ? completedStyle : null } >{props.item.text}</p>
		</div>
  )
}

export default Todolist;