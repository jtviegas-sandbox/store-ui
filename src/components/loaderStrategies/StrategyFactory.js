import ItemsStrategy from './ItemsStrategy';
import ItemStrategy from './ItemStrategy';
import { Logger } from 'react-logger-lib';

class StrategyFactory {

	constructor(config, dataService) {
		Logger.of('store-ui.StrategyFactory.constructor').trace('in', 'config:', config);
        this.config = config;
        this.dataService = dataService;
        this.strategies = {};
        this.strategies['items'] = new ItemsStrategy(this.config, this.dataService);
        this.strategies['items/*'] = new ItemStrategy(this.config, this.dataService);
		Logger.of('store-ui.StrategyFactory.constructor').trace('out');
	}

	get(props) {
		Logger.of('store-ui.StrategyFactory.get').trace('in', 'props:', props);
		let pathElements = props.match.path.replace('/', '').split('/');

		let mainPath = pathElements[0];
		let extendedPath = mainPath + this.config.extendedPathSuffix

		let r;
		if( 0 < Object.keys( props.match.params ).length )
			r = this.strategies[extendedPath];
		else
			r = this.strategies[mainPath];

	    r.setProps(props);

		Logger.of('store-ui.StrategyFactory.get').trace('out', 'r:', r);
        return r;
	};

};

export default StrategyFactory;