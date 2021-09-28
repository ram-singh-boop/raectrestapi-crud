import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return(
 <>

 <NavLink exact to="/">Home
</NavLink> &nbsp;&nbsp;


<NavLink exact to="/about">about
</NavLink>&nbsp;&nbsp;

<NavLink exact to="/contact">contact
</NavLink>&nbsp;&nbsp;


<NavLink exact to="/users/add" class="btn btn-primary">Add users
</NavLink>&nbsp;&nbsp;

 </>
	);

}



export default Navbar;

