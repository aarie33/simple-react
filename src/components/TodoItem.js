import React, { Component } from 'react';
import PropTyes from 'prop-types';
import { 
	ListGroupItem,
	FormCheck } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../fontawesome';

class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through':'none'
		}
	}

	render(){
		const { id, title, completed } = this.props.todo
		return (
			<ListGroupItem>
				<div className="d-flex">
					<div key={id} className="mr-2">
						<FormCheck 
					        type='checkbox'
					        id={id}
					        checked={ completed ? true:false}
					        onChange={ this.props.markComplete.bind(this, id) }
				        />
			        </div>
					<div style={this.getStyle()}>{ title }</div>

					<a href="#" className="ml-auto" onClick={this.props.delTodo.bind(this, id)}><FontAwesomeIcon icon="times" /></a>
				</div>
			</ListGroupItem>
			)
	}
}

TodoItem.propTypes = {
	todo: PropTyes.object.isRequired,
	markComplete: PropTyes.func.isRequired,
	delTodo: PropTyes.func.isRequired
}

export default TodoItem;
