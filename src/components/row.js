import React from 'react';
import './row.css';
import { useHistory } from 'react-router-dom';


function Row(props) {
	const history = useHistory();

	function onEdit() {
		history.push('/edit/' + props.index)
	}

	return (
		<div className="body-row" >

			 {props.index + 1} . <span >{props.value}</span> 
			<button onClick={props.onDeleteRow}>Delete</button>
			<button onClick={onEdit}>Edit</button>
			
		</div>
	);
}

export default Row;
