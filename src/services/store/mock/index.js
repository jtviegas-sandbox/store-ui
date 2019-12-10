import uuid from 'uuid';
import store from './data.js';

class MockDataStore {

    constructor(props) {
    	this.config = props;
        this.data = store;
    }

    // data file format: 'id', 'number', 'date', 'name', 'price', 'family', 'category', 'subcategory', 'notes'
    getObjIndex(type, obj){
        let r = -1
        if( obj.id ){
            let s = this.data[type].filter(e => obj.id === e.id)
            if(1 === s.length)
                r = this.data[type].indexOf(s[0]);
        }
        return r;
    }

    getIdIndex(type, id){
    	
        let r = -1
        if( id ){
            let s = this.data[type].filter(e => id === e.id)
            console.log('found with id:', id, 'the obj array:', s);
            if(1 === s.length)
                r = this.data[type].indexOf(s[0]);
        }
        return r;
    }

    syncSetObj(type, o){
        let idx = this.getObjIndex(type, o);
        if( idx > -1 )
            this.data[type][idx] = o;
        else{
            if( !o.id )
                o.id = uuid();
            this.data[type].push(o);
        }
    }

    setObj(type, o, cb){
        try{
            this.syncSetObj(type, o);
            cb(null, o);
        }
        catch(error){
            cb(error);
        }
        
    }

    getObj(type, id, cb){
        try{
            let _data = this.data[type];
            cb(null, _data[id-1]);
         }
        catch(error){
            cb(error);
        }
    }

    getObjs(type, cb){
    	this.getPagedObjs(type, null, null, cb);
    }
    
    getPagedObjs( type, id, pageSize, callback){
    	console.log('[MockDataStore|getPagedObjs|in]');

        let r = {data: null, page: {}};
        try {
            let _data = this.data[type];
            let n = _data.length;
            let i1 = 1, i2 = pageSize;

            if( 0 > id ){ // last page requested
                // three cases: p>=n, p<n
                if( pageSize >= n ){
                    i1 = 1;
                    i2 = n;
                }
                else {
                    i1 = Math.floor(n/pageSize) * pageSize;
                    i2 = i1 + ( n % pageSize );
                }
            }
            else if(id <= n && id > 0) {
                i1 = id;
                i2 = (id+pageSize-1 > n) ? n : id+pageSize-1;
            }

        	r.data = _data.slice(i1-1, i2);

        	r.page.first = 1;
        	if( i1  === 1 )
                r.page.first = null;
        	r.page.last = -1;
        	r.page.previous = (i1 - pageSize <= 0) ? 1 : i1 - pageSize;
            if( r.page.previous === i1 )
                r.page.previous = null;

        	r.page.next = (i2+1) > n ? null : i2+1 ;
        	if( i2 === n ){
                r.page.next = null;
                r.page.last = null;
            }


            console.log('[MockDataStore|getPagedObjs] r:', r);
            callback(null, r);
         }
        catch(error){
            console.log('[MockDataStore|getPagedObjs] error:', error);
            callback(error);
        }
        console.log('[MockDataStore|getPagedObjs|out]');
    }

    removeObj(type, id, cb){
        try {
            let r = null;
            let idx = this.getIdIndex(type, id);
            if( idx > -1 )
                r = this.data[type].splice(idx,1);
            cb(null, r);
         }
        catch(error){
            cb(error);
        }
    }

    setObjs(type, os, cb){
        try {
            os.forEach(function(o) {
                this.syncSetObj(type, o);
            }); 
            cb(null, [...this.data[type]]);
         }
        catch(error){
            cb(error);
        }
    }

    clear(type, cb){
        try {
            let o = this.data[type].splice(0);
            cb(null, o);
         }
        catch(error){
            cb(error);
        }
    }


};

export default MockDataStore;


