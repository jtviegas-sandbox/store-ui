import axios from 'axios';

class RestDataStore {


	constructor(props) {
        if( !props.defaultPageSize )
            throw new Error('!!! no defaultPageSize app !!!');
        this.url = props.url;
	}

    getPagedObjs(type, lastKey, pageSize, callback) {
        console.log('[RestDataStore|getPagedObjs|in](type:', type, ',lastKey:', lastKey,', pageSize:', pageSize,')');

        if(!type){
            console.error('[RestDataStore|getPagedObjs] no type provided');
            throw "no type provided";
        }

        let _url = this.url + '/' + type;
        let _query = null;
        if(lastKey)
            _query = _query ? _query+=`&lastkey=${lastKey}` : `?lastkey=${lastKey}`;
        if(pageSize)
            _query = _query ? _query+=`&pagesize=${pageSize}` : `?pagesize=${pageSize}`;

        if(_query)
            _url += _query;

        axios.get(_url).then(response => callback(response));

        console.log('[RestDataStore|getPagedObjs|out]');
    }

	getObj(type, key, callback) {
        console.log('[RestDataStore|getObj|in](type:', type, ',key:', key,')');

        if(!type){
            console.error('[RestDataStore|getObj] no type provided');
            throw "no type provided";
        }
        if(!key){
            console.error('[RestDataStore|getObj] no key provided');
            throw "no key provided";
        }

        let _url = this.url + '/' + type + '/' + key;

        axios.get(_url).then(response => callback(response));

        console.log('[RestDataStore|getObj|out]');
	};

}
;

export default RestDataStore;