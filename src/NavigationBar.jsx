import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class NavigationBar extends Component {
	constructor(props) {
		super(props)
	
	}

	render() {
		return (
				<Nav className="justify-content-end" activeKey="/home">
				    <Nav.Item>
				      <Nav.Link href="/home" style={{float:'right'}}>Login</Nav.Link>
				    </Nav.Item>
				    <Nav.Item>
				      <Nav.Link eventKey="link-1" style={{marginLeft:'90%'}}>Register</Nav.Link>
				    </Nav.Item>
			  </Nav>
		);
	}

}

export default NavigationBar;