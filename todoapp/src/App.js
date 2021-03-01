import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// importing components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
			</Router>
			<Form />
			<TodoList />
		</div>
	);
}

export default App;
