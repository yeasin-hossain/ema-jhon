import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderInfo from './Components/Shop/OrderInfo/OrderInfo';
import Nav from './Components/Nav/Nav';
import Cart from './Components/Shop/Cart/Cart';
import { EmaJhonProvider } from './DataBase';
import ProductInfo from './Components/Shop/Product/ProductInfo';

function App() {
	return (
		<Router>
			<Nav />
			<EmaJhonProvider>
				<div className="row">
					<div className="col-md-8">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/order">
								<OrderInfo />
							</Route>
							<Route path="/product/:key">
								<ProductInfo />
							</Route>
						</Switch>
					</div>
					<div className="col-md-4 border-start p-3">
						<Cart />
					</div>
				</div>
			</EmaJhonProvider>
		</Router>
	);
}

export default App;
