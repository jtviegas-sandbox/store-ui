
import React from 'react';
import About from "./About";
import Contacts from "./Contacts";
import Privacy from "./Privacy";
import { withRouter } from 'react-router';
import {NavLink} from "react-router-dom";
import {Logger} from "react-logger-lib";

class CollapsibleHeader extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {};
	}

	render(){
		Logger.of('store-ui.CollapsibleHeader.render').trace('in', 'this.props:', this.props, 'this.state:', this.state);
		const configuration = this.props.configuration;
		Logger.of('store-ui.CollapsibleHeader.render').trace('out');
		return (
				<div>
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
										<About branding={configuration.branding} />
									</div>
									<div className="collapse col-12" id="contacts">
										<Contacts branding={configuration.branding} />
									</div>
									<div className="collapse col-12" id="privacy">
										<Privacy branding={configuration.branding} />
									</div>
							</div>

					</div>

					<div className="navbar navbar-light box-shadow">
						<div className="container d-flex justify-content-between">
							<NavLink className="navbar-brand d-flex align-items-center" to='/' >
								<img src={configuration.app.headerImageFile} className="rounded" alt="..."/>
								<strong>{configuration.branding.name}</strong>
							</NavLink>
							<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						</div>
					</div>
				</div>
			)
	}
};

export default withRouter( CollapsibleHeader );
