import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTyes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../fontawesome';

class Todos extends Component {
	state = {
		title: ''
	}

	onChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: ''})
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit} className="d-flex mb-1">
					<input 
						type="text" 
						name="title"
						placeholder="Add todo..."
						className="form-control form-control-sm"
						value={this.state.title}
						onChange={this.onChange} />

					<button 
						type="submit" 
						value="Submit"
						className="btn btn-dark btn-sm ml-1 d-flex">
						<FontAwesomeIcon icon="check" className="my-auto mr-1" /> Simpan
					</button>

				</form>
				<ListGroup>
					{	
						this.props.todos.map((todo) => (
							<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
						))
					}
				</ListGroup>
			</div>
		)
	}
}

Todos.propTypes = {
	todos: PropTyes.array.isRequired,
	markComplete: PropTyes.func.isRequired,
	delTodo: PropTyes.func.isRequired,
	addTodo: PropTyes.func.isRequired
}

export default Todos;
