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
					<div className="row align-items-start justify-content-center">
						<div className="col-sm">
							<address>
								<strong>address</strong><br/>
								{branding.address.line1}<br/>
								{branding.address.line2}<br/>
								{branding.address.postalcode} - {branding.address.country}
							</address>
							<iframe
								src={branding.contacts.mapsrc}
								width="300" height="150" frameBorder="1" className="borderless" allowFullScreen="">
							</iframe>
						</div>
						<div className="col-sm">
							<div className="row row-cols-2">
								<div className="col">
									<address>
										<strong>e-mail</strong><br/>
										{branding.email}
									</address>
								</div>
								<div className="col">
									<div className="px-lg-3 float-right"><a href="https://facebook.com/split4ever"><img src="assets/fb.png" alt="facebook"/></a></div>
								</div>
								<div className="col">
									<address>
										<strong>phone</strong><br/>
										{branding.phone}
									</address>
								</div>
								<div className="col">
									<div className="px-lg-3 float-right"><a href="https://instagram.com/split4ever"><img src="assets/ig.png" alt="instagram"/></a></div>
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