import React from 'react';

class About extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		const branding = this.props.branding;
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of
						its parent.</p>
				</div>
			</div>
		)
	}
};



export default About;