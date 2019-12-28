
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Logger } from 'react-logger-lib';

import Items from './Items';
import Item from './Item';
import NonCollapsibleHeader from './NonCollapsibleHeader';
import CollapsibleHeader from './CollapsibleHeader';

import Footer from './Footer';

import app from '../config/app';
import branding from '../config/branding';
import StateManager from "./strategies/StateManager";

const configuration = {
	app: app
	, branding: branding
}

const stateManager = new StateManager(configuration);

class App extends React.Component {

	constructor(props) {
		super(props);
		Logger.of('store-ui.App.constructor').trace('in', 'props.location:', props.location);

		this.state = {
			items: {}
			, item: null
			, authentication: stateManager.getAuth()
		};

		Logger.of('store-ui.App.constructor').trace('out');
	}

	componentDidMount(){
		Logger.of('store-ui.App.componentDidMount').trace('in', 'this.props.location:', this.props.location, 'this.state:', this.state);
		Logger.of('store-ui.App.componentDidMount').trace('out');
	}

	static getDerivedStateFromProps(props, state){
		Logger.of('store-ui.App.getDerivedStateFromProps').trace('in', 'props.location:', props.location, 'state:', state);
		Logger.of('store-ui.App.getDerivedStateFromProps').trace('out');
		return state;
	}

	//localStorage.setItem('store-ui', 'INFO');
	render(){
		Logger.of('store-ui.App.render').trace('in', 'props:', this.props, 'state:', this.state);

		const { items, item, authentication } = this.state;
		const props = this.props;
		const intents = stateManager.getIntents(this);

		Logger.of('store-ui.App.render').trace('out');
		return (
			<HashRouter>
				<section className="container-fluid">
					<header>
						<CollapsibleHeader {...props} intents={intents} authentication={authentication} configuration={configuration} />
						<NonCollapsibleHeader {...props} intents={intents} authentication={authentication} configuration={configuration} />
					</header>

					<section className="container">
						<Switch>
							<Route exact path="/items/:id" render={(props) => <Item {...props} item={item} intents={intents} />} />
							<Route exact path="/items" render={(props) => <Items {...props} items={items} intents={intents} />} />
							<Redirect from="/" to="/items" />
						</Switch>
					</section>
					<Footer configuration={configuration} />
				</section>
			</HashRouter>
		)
	}

}

export default App;

