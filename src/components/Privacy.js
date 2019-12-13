import React from 'react';

class Privacy extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		const branding = this.props.branding;
		return (
			<div className="jumbotron-fluid">
				<div className="container">

					<p>{branding.privacy.text}</p>
				</div>
			</div>
		)
	}
};



export default Privacy;