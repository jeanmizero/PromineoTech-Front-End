import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Label>LogIn</Form.Label>
					<Form.Control type="username" placeholder="Enter username" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Enter Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>
				<Button type="login">Login</Button>
			</Form>
		</div>
	);
};

export default Login;
