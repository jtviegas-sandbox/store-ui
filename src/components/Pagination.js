
import React from 'react';
import { NavLink } from 'react-router-dom';


const Pagination = ({ first, previous , next, last, path}) =>
	<nav aria-label="...">
		<ul className="pagination pagination-sm justify-content-end">
			{
				first ? <li className="page-item"><NavLink className="page-link" to={ path + '?id=' + first} >first</NavLink></li> :
					<li className="page-item disabled"><NavLink className="page-link" to={ path + '?id=' + first} >first</NavLink></li>
			}
			{
				previous ? <li className="page-item"><NavLink className="page-link" to={ path + '?id=' + previous } >previous</NavLink></li>
					: <li className="page-item disabled"><NavLink className="page-link" to={ path + '?id=' + previous } >previous</NavLink></li>
			}
			{
				next ? <li className="page-item"><NavLink className="page-link" to={ path + '?id=' + next } >next</NavLink></li>
					: <li className="page-item disabled"><NavLink className="page-link" to={ path + '?id=' + next } >next</NavLink></li>
			}
			{
				last ? <li className="page-item"><NavLink className="page-link" to={ path + '?id=' + last } >last</NavLink></li> :
					<li className="page-item disabled"><NavLink className="page-link" to={ path + '?id=' + last } >last</NavLink></li>
			}

		</ul>
	</nav>

export default Pagination;