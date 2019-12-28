import React from 'react';
import { Logger } from 'react-logger-lib';

class Authentication extends React.Component {
	
	constructor(props){
		super(props)
		Logger.of('store-ui.Authentication.constructor').trace('in', 'props:', props);
		this.state = {};
		Logger.of('store-ui.Authentication.constructor').trace('out');
	}

	static getDerivedStateFromProps(props, state){
		Logger.of('store-ui.Authentication.getDerivedStateFromProps').trace('in', 'props:', props);

		if( props.location && props.location.pathname && props.intents.doesPathHaveTokens(props.location.pathname) ){
			Logger.of('store-ui.Authentication.getDerivedStateFromProps').info('going to parse tokens');
			props.intents.parseLocationTokens(props);
			Logger.of('store-ui.Authentication.getDerivedStateFromProps').info('...parsed tokens');
		}

		Logger.of('store-ui.Authentication.getDerivedStateFromProps').trace('out');
		return state;
	}

	render(){
		Logger.of('store-ui.Authentication.render').info('in', 'this.props:', this.props);
		const { intents, authentication } = this.props;
		Logger.of('store-ui.Authentication.render').trace('out');
		if( authentication.tokens && authentication.tokens.access ){
			return ( <div>Hello <strong>{ authentication.user }</strong>{' ('}<button className="btn btn-link" onClick={intents.logout}>logout</button>{')'} </div> )
		}
		else {
			return ( <button className="btn btn-link" onClick={intents.login} >login</button> )
		}
	}
};

export default Authentication;