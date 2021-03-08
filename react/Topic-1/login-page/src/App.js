import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Login from "./components/Login";
import LeftSide from "./components/LeftSide";

function App() {
	return (
		<div className="App">
			<Menu />
			<Row className="landing">
				<Col>
					<Login />
				</Col>
			</Row>
		</div>
	);
}

export default App;
