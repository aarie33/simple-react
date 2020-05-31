import React from 'react';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/">Todo List</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Header