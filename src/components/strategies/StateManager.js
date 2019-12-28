import { Logger } from 'react-logger-lib';
import StrategyFactory from "./StrategyFactory";
import DataService from "../../services/data";
import {CognitoAuth} from "amazon-cognito-auth-js";
import {decode} from 'jsonwebtoken';

class StateManager {

	constructor(configuration) {
		Logger.of('store-ui.StateManager.constructor').trace('in');
		this.configuration = configuration;
		this.dataService = new DataService(configuration.app);
		this.strategyFactory = new StrategyFactory(configuration.app, this.dataService);

		this.authentication = {
			instance: new CognitoAuth(configuration.app.auth.cognito)
			, tokens: null
			, user: null
			, email: null
		}

		this.authentication.instance.userhandler = {
			onSuccess: (r) => { Logger.of('store-ui.StateManager.authentication.userhandler.success').trace(r); }
			, onFailure: (e) => { Logger.of('store-ui.StateManager.authentication.userhandler.failure').error(e); }
		};

		Logger.of('store-ui.StateManager.constructor').trace('out');
	}

	getAuth(){
		return {
			tokens: this.authentication.tokens
			, user: this.authentication.user
			, email: this.authentication.email
		};
	}

	cleanAuth(){
		this.authentication.tokens = null;
		this.authentication.user = null;
		this.authentication.email = null;
	}

	isAuthenticated(){
		return null !== this.authentication.tokens && null !== this.authentication.tokens.access;
	}

	getIntents(referenceComponent) {
		Logger.of('store-ui.StateManager.get').trace('in', 'referenceComponent:', referenceComponent);

		let r = function(stateManager, component){
			Logger.of('store-ui.StateManager.get').trace('in', 'stateManager:', stateManager, 'component:', component);
			let doesPathHaveTokens = (path) => {
				Logger.of('store-ui.StateManager.intents.doesPathHaveTokens').trace('[in]','path: ', path);
				let r = path && -1 < path.indexOf('access_token');
				Logger.of('store-ui.StateManager.intents.doesPathHaveTokens').trace('[out]','r: ', r);
				return r;
			}

			let parseLocationTokens = (props) => {
				Logger.of('store-ui.StateManager.intents.parseLocationTokens').trace('[in]','props: ', props, 'component.state: ', component.state);

				if(props.location && props.location.pathname &&
					-1 < props.location.pathname.indexOf('access_token')){
					let s = props.location.pathname;
					if( s.startsWith('/') )
						s = s.replace('/','');
					let parts = s.split('&');

					let tokens = {};
					for( let i=0; i < parts.length; i++ ){
						let part = parts[i];
						let kv = part.split('=');
						if( 2 === kv.length ){
							let k = kv[0];
							let v = kv[1];
							switch(k){
								case "access_token":
									tokens.access = v;
									break;
								case "id_token":
									tokens.id = v;
									break;
								case "token_type":
									tokens.type = v;
									break;
								case "expires_in":
									tokens.expires = Date.now() + parseInt(v) * 1000;
									break;
							}
						}
					}

					Logger.of('store-ui.StateManager.intents.parseLocationTokens').trace('tokens:', tokens);
					stateManager.authentication.tokens = tokens;
					if( 0 < Object.keys(tokens).length ){
						let id = decode(tokens.id);
						stateManager.authentication.user = id.name;
						stateManager.authentication.email = id.email;
					}
					let _authentication = stateManager.getAuth();
					Logger.of('store-ui.StateManager.intents.parseLocationTokens').info('going to set state authentication:', _authentication);
					Logger.of('store-ui.StateManager.intents.parseLocationTokens').info('going to set state authentication:', _authentication);
					component.setState( { authentication: _authentication } );
				}

				Logger.of('store-ui.StateManager.intents.parseLocationTokens').trace('[out]');
			};

			let path = (params) => {
				Logger.of('store-ui.StateManager.intents.path').trace('[in]','params: ', params, 'component.state: ', component.state);

				let strategy = stateManager.strategyFactory.get('path', params);
				strategy.doIt( (e,o) => {
					if (e)
						Logger.of('store-ui.StateManager.intents.path.strategy.callback').error(e);
					else {
						Logger.of('store-ui.StateManager.intents.path.strategy.callback').info('new state: ', o);
						component.setState(o);
					}});

				Logger.of('store-ui.StateManager.intents.path').trace('[out]');
			};

			let login = () => {
				Logger.of('store-ui.StateManager.intents.login').trace('[in]');

				stateManager.authentication.instance.userhandler = {
					onSuccess: function(result) {
						Logger.of('store-ui.StateManager.intents.login.userhandler').info("On Success result: ", result);
					},
					onFailure: function(err) {
						Logger.of('store-ui.StateManager.intents.login.userhandler').error(err);
					}
				};

				try{
					stateManager.authentication.instance.getSession();
					Logger.of('store-ui.StateManager.intents.login').info('got session');
				}
				catch(e){
					Logger.of('store-ui.StateManager.intents.login').error(e);
				}

				Logger.of('store-ui.StateManager.intents.login').trace('[out]');
			};

			let logout = () => {
				Logger.of('store-ui.StateManager.intents.logout').trace('[in]', 'component.state: ', component.state);
				stateManager.authentication.instance.signOut();
				stateManager.cleanAuth();
				component.setState({ authentication: stateManager.getAuth() });
				Logger.of('store-ui.StateManager.intents.logout').trace('[out]', 'component.state: ', component.state);
			};


			return { path: path, login: login, logout: logout,
				parseLocationTokens: parseLocationTokens, doesPathHaveTokens: doesPathHaveTokens };
		}(this, referenceComponent);

		Logger.of('store-ui.StateManager.get').trace('out', 'r: ', r);
		return r;
	}

};



export default StateManager;