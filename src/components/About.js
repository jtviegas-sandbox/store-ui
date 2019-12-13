import React from 'react';

class About extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		const branding = this.props.branding;
		return (
			<div className="jumbotron-fluid">
				<div className="card mb-3 borderless">
					<div className="row no-gutters">
						<div className="col-md-8">
							<div className="card-body">
								<p className="card-text">{branding.about.text}</p>
								<p className="card-text"><small className="text-muted">{branding.about.signature}</small>
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<img src="assets/branding/about.png" className="card-img" alt="about" />
						</div>
					</div>
				</div>
			</div>
		)
	}
};



export default About;