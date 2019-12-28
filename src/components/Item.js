
import React from 'react';
import ReadMore from './ReadMore';
import { Logger } from 'react-logger-lib';

class Item extends React.Component {

	constructor(props){
		super(props)
		Logger.of('store-ui.Item.constructor').trace('in', 'props:', props);
		this.state = { item: null }
		Logger.of('store-ui.Item.constructor').trace('out');
	}

	componentDidMount(){
		Logger.of('store-ui.Item.componentDidMount').trace('in', 'this.props:', this.props, 'this.state:', this.state);
		Logger.of('store-ui.Item.componentDidMount').trace('out');
	}

	static getDerivedStateFromProps(props, state){
		Logger.of('store-ui.Item.getDerivedStateFromProps').trace('in', 'props:', props, 'state:', state);
		let path = props.location.pathname + props.location.search;
		if( path !== state.path ){
			Logger.of('store-ui.Item.getDerivedStateFromProps').info('location changed, going to ask for reload');
			state.path = path;
			props.intents.path( { match: props.match, location: props.location} );
		}
		else {
			Logger.of('store-ui.Item.getDerivedStateFromProps').info('same location, going to assign same item to state');
			state.item = props.item;
		}
		Logger.of('store-ui.Item.getDerivedStateFromProps').trace('out', 'state:', state);
		return state;
	}


	render(){
		Logger.of('store-ui.Item.render').trace('in', 'this.props:', this.props, 'this.state:', this.state);
		const { item } = this.state;

		if( null === item )
			return ( <section></section> )
		else
			return (
				<section>
					<div className="card text-center mb-3">

						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

							<ol className="carousel-indicators">
								{ item.images.map( (img, i) => <li data-target="#carouselExampleIndicators" key={i} data-slide-to={i} className={i===0 ? "active" : "" }  ></li> ) }
							</ol>
							<div className="carousel-inner">
								{ item.images.map( (img, i) =>
									<div key={img.name} className={i===0 ? "carousel-item active" : "carousel-item" }>
										<img className="d-block w-100" src={"data:image/" + img.type + ";base64," + img.data} alt={img.name}></img>
									</div>
								)
								}
							</div>
							<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>

						<div className="card-body">
							<h5 className="card-title"> {item.name} </h5>
							<ReadMore className="card-text" lines={1} >
								{item.notes}
							</ReadMore>
						</div>
						<ul className="list-group list-group-flush text-center">
							<li className="list-group-item"><b>id: </b>{item.id}</li>
							<li className="list-group-item"><b>number: </b>{item.number}</li>
							<li className="list-group-item"><b>family: </b>{item.family}</li>
							<li className="list-group-item"><b>category: </b>{item.category}</li>
							<li className="list-group-item"><b>subcategory: </b>{item.subcategory}</li>
							<li className="list-group-item">{item.price} €</li>
						</ul>
					</div>
				</section>
			)

		Logger.of('store-ui.Item.render').trace('out');
	}
};

export default Item;