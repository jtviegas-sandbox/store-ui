
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Logger } from 'react-logger-lib';

import Items from './Items';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import DataService from '../services/data/index';
import configuration from '../configuration';

import StrategyFactory from "./loaderStrategies/StrategyFactory";

const dataService = new DataService(configuration);
const loaderStrategyFactory = new StrategyFactory(configuration, dataService);

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			items: {}
			, item: null
		}
	}

	componentDidMount(){
		Logger.of('store-ui.App.componentDidMount').trace('in', 'this.props:', this.props, 'this.state:', this.state);
		Logger.of('store-ui.App.componentDidMount').trace('out');
	}

	static getDerivedStateFromProps(props, state){
		Logger.of('store-ui.App.getDerivedStateFromProps').trace('in', 'props:', props, 'state:', state);
		Logger.of('store-ui.App.getDerivedStateFromProps').trace('out');
		return state;
	}
	//localStorage.setItem('store-ui', 'INFO');
	render(){
		Logger.of('store-ui.App.render').trace('in', 'props:', this.props, 'state:', this.state);
		const { items } = this.state;
		const { item } = this.state;
		const props = this.props;

		const onIntent = function(func){

			let f = (props) => {
				if( props.match && props.match.isExact ){
					let strategy = loaderStrategyFactory.get(props);
					strategy.doIt( (e,o) => {
						if (e)
							Logger.of('store-ui.App.onIntent.callback').error(e);
						else {
							Logger.of('store-ui.App.onIntent.callback').info('new state: ', o);
							func(o);
						}});
				}
			};

			return {f:f};

		}(this.setState.bind(this)).f;


		Logger.of('store-ui.App.render').trace('out');

		return (
			<HashRouter>
				<section className="container-fluid">
					<Header />
					<section className="container">
						<Switch>
							<Route exact path="/items/:id" render={(props) => <Item {...props} item={item} onIntent={onIntent} />} />
							<Route exact path="/items" render={(props) => <Items {...props} items={items} onIntent={onIntent}/>} />
							<Redirect from="/" to="/items" /> } />
						</Switch>
					</section>
					<Footer />
				</section>
			</HashRouter>
		)
	}

}

export default App;


