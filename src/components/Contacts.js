import React from 'react';

class Contacts extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		const branding = this.props.branding;
		return (

			<div className="jumbotron-fluid">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<address>
								<strong>{branding.name}</strong><br/>
								{branding.address.line1}<br/>
								{branding.address.line2}<br/>
								{branding.address.postalcode}<br/>
								{branding.address.country}<br/>
								<abbr title="Phone">P:</abbr> {branding.phone}
							</address>
						</div>

						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<address>
								<strong>e-mail</strong><br/>
								<a href={'mailto:'+branding.email}>{branding.email}</a>
							</address>
						</div>

						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<div className="container">
								<div className="row">
									<div className="float-right"><a href="https://facebook.com/split4ever"><img src="images/fb.png" alt="facebook"/></a></div>
								</div>
								<div className="row">
									<div className="float-right"><a href="https://instagram.com/split4ever"><img src="images/ig.png" alt="instagram"/></a></div>
								</div>
							</div>

						</div>

					</div>
				</div>

			</div>

		)
	}
};

export default Contacts;