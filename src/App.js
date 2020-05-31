import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
	Container, 
	Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import About from './components/pages/About';
import './App.css';

class App extends Component {
	state = {
		todos: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => 
				this.setState({ todos: res.data}) )
	}
	// toggle complete
	markComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo
		})})
	}
	delTodo = (id) => {
		// @ static data
		// this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
	}
	addTodo = (title) => {
		// @ static data
		// const newTodo = {
		// 	id: uuid(),
		// 	title,
		// 	completed: false
		// this.setState({ todos: [...this.state.todos, newTodo]})
		// }

		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		}).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
	}
	render(){ 
		return (
			<Router>
				<div className="App">
					<Header />
					<Container className="mt-2">
						<Route exact path="/" render={props => (
							<React.Fragment>
								<Todos todos={this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} addTodo={this.addTodo} />
							</React.Fragment>
							)} />

						<Route path="/about" component={About} />
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
