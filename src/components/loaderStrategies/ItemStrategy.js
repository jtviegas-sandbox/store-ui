import { Logger } from 'react-logger-lib';

class ItemStrategy {

	constructor(config, dataService) {
        Logger.of('store-ui.ItemStrategy.constructor').trace('in', 'config:', config, 'dataService:', dataService);
        this.config = config;
        this.dataService = dataService;
        this.params = null;
        Logger.of('store-ui.ItemStrategy.constructor').trace('out');
	}

    setProps(props){
        Logger.of('store-ui.ItemStrategy.setProps').trace('in', 'props:', props);
	    this.props = props;
        Logger.of('store-ui.ItemStrategy.setProps').trace('out');
    }

    doIt(callback) {
        Logger.of('store-ui.ItemStrategy.doIt').trace('in');

        try{
            let match = this.props.match;
            if( null != match && match.isExact && match.params && match.params.id  ){
                this.dataService.getItem(match.params.id, (e,o) => {
                    if(e)
                        callback(e);
                    else
                        callback(null, {item: o});
                });
            }
            else
                throw new Error('could not conclude item strategy for ' + this.props.location.pathname);
        }
        catch(e){
            callback(e);
        }

        Logger.of('store-ui.ItemStrategy.doIt').trace('out');
    }

};

export default ItemStrategy;