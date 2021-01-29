import './App.css';
import Nav from './component/includes/Nav';
import About from './component/About';
import Contact from './component/Contact';
import Shop from './component/Shop';
import Product from './component/Product';
import NotFound from './component/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" exact component={Product} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	)
}

export default App;
