
import React from 'react';
import ItemSmallWidget from './ItemSmallWidget';
import Pagination from './Pagination';
import { withRouter } from 'react-router';
import { Logger } from 'react-logger-lib';

class Items extends React.Component {

	constructor(props){
		super(props)
		Logger.of('store-ui.Items.constructor').trace('[IN]', 'props:', props);
		this.state = { items: {} , path: null};
		Logger.of('store-ui.Items.constructor').trace('[OUT]');
	}

	static getDerivedStateFromProps(props, state) {
		Logger.of('store-ui.Items.getDerivedStateFromProps').trace('[IN]', 'props:', props, 'state:', state);
		let path = props.location.pathname + props.location.search;
		if( path !== state.path ){
			Logger.of('store-ui.Items.getDerivedStateFromProps').info('location changed, going to ask for reload');
			state.path = path;
			props.onIntent(props);
		}
		else {
			Logger.of('store-ui.Items.getDerivedStateFromProps').info('same location, going to assign items to state');
			state.items = props.items;
		}
			
		Logger.of('store-ui.Items.getDerivedStateFromProps').trace('[OUT]', 'state:', state);
		return state;
	}

	componentDidMount() {
		Logger.of('store-ui.Items.componentDidMount').trace('[IN]', 'this.props:', this.props, 'this.state:', this.state);
		Logger.of('store-ui.Items.componentDidMount').trace('[OUT]');
	}

	render(){
		Logger.of('store-ui.Items.render').trace('[IN]', 'this.props:', this.props, 'this.state:', this.state);
		const { items } = this.state;
		const { history } = this.props;
		const { location } = this.props;

		if( items && items.data )
			return (
				<section>
					<div className="card-columns">
						{ items.data.map( (item, i) => <ItemSmallWidget item={item} key={item.id} history={history} path={location.pathname}/>  ) }
					</div>
					<Pagination first={items.page.first} previous={items.page.previous} next={items.page.next} last={items.page.last} path={location.pathname} />
				</section>
			)
		else
			return ( <section></section> )

		Logger.of('store-ui.Items.render').trace('[OUT]');
	}
};


export default withRouter( Items );
