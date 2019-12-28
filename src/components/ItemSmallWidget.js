
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReadMore from './ReadMore';



const ItemSmallWidget = ({item, path}) =>
	<div className="card small-part-widget">
		<img className="card-img-top" src={"data:image/" + item.images[0].type + ";base64," + item.images[0].data} alt={item.images[0].name} />
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
		<div className="card-footer text-right">
			<NavLink to={path + '/' + item.id} className="card-link">check it</NavLink>
		</div>
	</div>



export default withRouter(ItemSmallWidget);