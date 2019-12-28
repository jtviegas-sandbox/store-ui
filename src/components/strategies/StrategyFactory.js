import { Logger } from 'react-logger-lib';
import PathStrategyFactory from "./PathStrategyFactory";

class StrategyFactory {

	constructor(config, dataService) {
		Logger.of('store-ui.StrategyFactory.constructor').trace('in', 'config:', config);
        this.config = config;
        this.dataService = dataService;

        this.intentStrategyFactories = {};
        this.intentStrategyFactories['path'] = new PathStrategyFactory(this.config, this.dataService);
		Logger.of('store-ui.StrategyFactory.constructor').trace('out');
	}

	get(intent, props) {
		Logger.of('store-ui.StrategyFactory.get').trace('in', 'intent:', intent, 'props:', props);
		let factory = this.intentStrategyFactories[intent];
		let r = factory.get(props);
		Logger.of('store-ui.StrategyFactory.get').trace('out', 'r:', r);
        return r;
	};

};

export default StrategyFactory;