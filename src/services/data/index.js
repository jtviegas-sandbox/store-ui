import { Logger } from 'react-logger-lib';
import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        Logger.of('store-ui.DataService.constructor').trace('in', 'config:', config);
        this.store = new DataStoreFactory(config.dataStore).get();
        this.itemsCollection = config.dataStore.collections.items;
        Logger.of('store-ui.DataService.constructor').trace('out');
	}
	getItems(params, callback) {
        Logger.of('store-ui.DataService.getItems').trace('in', 'params:', params);
        this.store.getPagedObjs(this.itemsCollection, params.fromId, params.pageSize, callback);
        Logger.of('store-ui.DataService.getItems').trace('out');
    };
    
    getItem(id, callback) {
        Logger.of('store-ui.DataService.getItem').trace('in', 'id:', id);
        this.store.getObj( this.itemsCollection, id, callback);
        Logger.of('store-ui.DataService.getItem').trace('out');
    };

};

export default DataService;