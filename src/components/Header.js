
import React from 'react';
import About from "./About";
import Contacts from "./Contacts";
import Privacy from "./Privacy";

class Header extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {};
	}

	render(){
		const branding = this.props.branding;
		return (
            <header>
				<div className="collapse container" id="navbarHeader">

						<div className="row">

								<p>
									<button className="btn btn-link" type="button" data-toggle="collapse"
											data-target="#about" aria-expanded="false"
											aria-controls="about">about
									</button>
									<button className="btn btn-link" type="button" data-toggle="collapse"
											data-target="#contacts" aria-expanded="false"
											aria-controls="contacts">contacts
									</button>
									<button className="btn btn-link" type="button" data-toggle="collapse"
											data-target="#privacy" aria-expanded="false"
											aria-controls="privacy">privacy
									</button>
								</p>

								<div className="collapse col-12" id="about">
									<About branding={branding} />
								</div>
								<div className="collapse col-12" id="contacts">
									<Contacts branding={branding} />
								</div>
								<div className="collapse col-12" id="privacy">
									<Privacy branding={branding} />
								</div>

{/*							<div className="col-sm-4 offset-md-1 py-4">
								<h4 className="text-muted">Contact</h4>
								<ul className="list-unstyled">
									<li><a href="" className="text-muted">Follow on Twitter</a></li>
									<li><a href="" className="text-muted">Like on Facebook</a></li>
									<li><a href="" className="text-muted">Email me</a></li>
								</ul>
							</div>*/}
						</div>

				</div>

				<div className="navbar navbar-light box-shadow">
					<div className="container d-flex justify-content-between">
					<a href="" className="navbar-brand d-flex align-items-center">
						<img src="images/header.png" className="rounded" alt="..."/>
						<strong>{branding.name}</strong>
					</a>
					<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					</div>
				</div>

			</header>
			)
	}
};


export default Header;