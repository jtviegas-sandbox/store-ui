import { Logger } from 'react-logger-lib';
import qs from "query-string";
import configuration from './../../configuration'

class ItemsStrategy {

	constructor(config, dataService) {
        Logger.of('store-ui.ItemsStrategy.constructor').trace('in', 'config:', config, 'dataService:', dataService);
        this.config = config;
        this.dataService = dataService;
        this.props = null;
        Logger.of('store-ui.ItemsStrategy.constructor').trace('out');
	}

    setProps(props){
        Logger.of('store-ui.ItemsStrategy.setProps').trace('in', 'props:', props);
	    this.props = props;
        Logger.of('store-ui.ItemsStrategy.setProps').trace('out');
    }

    doIt(callback) {
        Logger.of('store-ui.ItemsStrategy.doIt').trace('in');

        let id = 0;
        let query = qs.parse(this.props.location.search);
        if( query.id )
            id = parseInt(query.id);

        this.dataService.getItems({fromId: id, pageSize: configuration.pageSize}, (e,o) => {
            if(e)
                callback(e);
            else
                callback(null, {items: o})
        });

        Logger.of('store-ui.ItemsStrategy.doIt').trace('out');
    }

};

export default ItemsStrategy;