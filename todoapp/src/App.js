import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing components
import Home from './components/Home';
import Header from './components/Header';
// import Form from './components/Form';
// import TodoList from './components/TodoList';
import EditTask from './components/EditTask';
import NotFound from './components/NotFound';


function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/task/edit/:id" exact component={EditTask} />
					<Route component={NotFound} />
				</Switch>
			</div>
			</Router>
		</div>
	);
}

export default App;
