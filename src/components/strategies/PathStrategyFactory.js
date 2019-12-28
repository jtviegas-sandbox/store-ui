import ItemsStrategy from './ItemsStrategy';
import ItemStrategy from './ItemStrategy';
import { Logger } from 'react-logger-lib';

class PathStrategyFactory {

	constructor(config, dataService) {
		Logger.of('store-ui.PathStrategyFactory.constructor').trace('in', 'config:', config);
        this.config = config;
        this.dataService = dataService;
        this.strategies = {};
        this.strategies['items'] = new ItemsStrategy(this.config, this.dataService);
        this.strategies['items/*'] = new ItemStrategy(this.config, this.dataService);
		Logger.of('store-ui.PathStrategyFactory.constructor').trace('out');
	}

	get(props) {
		Logger.of('store-ui.PathStrategyFactory.get').trace('in', 'props:', props);
		let pathElements = props.match.path.replace('/', '').split('/');

		let path = pathElements[0];
		let wildcardPath = path + this.config.extendedPathSuffix

		let r;
		if( 0 < Object.keys( props.match.params ).length )
			r = this.strategies[wildcardPath];
		else
			r = this.strategies[path];

	    r.setProps(props);

		Logger.of('store-ui.PathStrategyFactory.get').trace('out', 'r:', r);
        return r;
	};

};

export default PathStrategyFactory;