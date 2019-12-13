import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 selection: {
				user: 0
				, part: null
			}
			, configuration: props.configuration
		}
	}
	
	UNSAFE_componentWillMount() {

	}
	
	render(){
		const { configuration, selection } = this.state;
		return (
            <footer className="text-muted">
				<div className="container">
				<hr className="featurette-divider" />
					<p className="float-right">
						<button id="back-to-top" className="btn btn-link">back to top</button>
					</p>
					<p>© 2018 split4ever</p>
				</div>
			</footer>
			)
	}
};


Footer.propTypes = {
		state: PropTypes.object.isRequired
	}

Footer.defaultProps = {
		state: {}
	}

export default Footer;