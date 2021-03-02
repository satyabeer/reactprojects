import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// importing components
import Form from './Form';
import TodoList from './TodoList';

function App() {
	return (
		<div className="App">
            <Form />
			<TodoList />
		</div>
	);
}

export default App;
