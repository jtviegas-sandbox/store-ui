
import React from 'react';
import { withRouter } from 'react-router';
import {Logger} from "react-logger-lib";
import About from "./About";
import Authentication from "./Authentication";

class NonCollapsibleHeader extends React.Component {
	
	constructor(props){
		super(props);
		Logger.of('store-ui.NonCollapsibleHeader.constructor').trace('in', 'props:', props);
		this.state = {};
		Logger.of('store-ui.NonCollapsibleHeader.constructor').trace('out');
	}

	componentDidMount(){
		Logger.of('store-ui.NonCollapsibleHeader.componentDidMount').trace('in', 'this.props:', this.props);
		Logger.of('store-ui.NonCollapsibleHeader.componentDidMount').trace('out');
	}

	static getDerivedStateFromProps(props, state){
		Logger.of('store-ui.NonCollapsibleHeader.getDerivedStateFromProps').trace('in', 'props:', props);
		Logger.of('store-ui.NonCollapsibleHeader.getDerivedStateFromProps').trace('out');
		return state;
	}

	render(){
		Logger.of('store-ui.NonCollapsibleHeader.render').trace('in', 'this.props:', this.props);
		const props = this.props;
		Logger.of('store-ui.NonCollapsibleHeader.render').trace('out');
		return (
				<div className="container">
					<div className="navbar navbar-light">
						<div className="row col-12 float-right">
							<Authentication {...props} />
						</div>
					</div>
					<hr className="featurette-divider" />
				</div>
		)
	}
};

export default withRouter( NonCollapsibleHeader );
