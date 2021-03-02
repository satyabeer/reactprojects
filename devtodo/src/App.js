import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, [])

	useEffect(() => {
		filteredHandler();
		saveLocalTodos();
	}, [todos, status])

	const filteredHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => (todo.completed === true)))
				break;

			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => (todo.completed !== true) ))
				break;

			default:
				setFilteredTodos(todos)
				break;
		}
	}

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let localTodo = JSON.parse(localStorage.getItem("todos"));
			setTodos(localTodo);
		}
	}

	return (
		<div className="App">
			<header>
				<h1>Satya's Todo List - {inputText}</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				status={status}
				setInputText={setInputText}
				setTodos={setTodos}
				setStatus={setStatus}
				getLocalTodos={getLocalTodos}
			/>
			<TodoList
				todos={todos}
				filteredTodos={filteredTodos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
