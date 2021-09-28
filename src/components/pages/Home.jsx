import React, { useState, useEffect} from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";


const Home = () => {

const [use, setUser] = useState([]);


useEffect(() => {
	console.log("vfsdgvhvhfs");
	loadusers();
}, []);

const loadusers = async () =>{
	const result = await axios.get("http://localhost:3002/users");
	//console.log(result);
	setUser(result.data.reverse());
}

const deleteUser = async (id) =>{
	await axios.delete(`http://localhost:3002/users/${id}`);
	loadusers();
}

	return(
 <>
 <div class="container mt-5">
<table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
       <th scope="col">website</th>
       <th scope="col" colspan="4">action</th>
    </tr>
  </thead>
  <tbody>
 
 {
 use.map((userl, index) => (
     <tr>
      <th scope="row">{index+1} </th>
      <td>{userl.name}</td>
      <td>{userl.username}</td>
      <td>{userl.email}</td>
<td>{userl.website}</td>
     <td> <Link type="button" class="btn btn-primary" to={`/users/${userl.id}`}>View</Link></td>

<td><Link type="button" class="btn btn-secondary" to={`/users/edit/${userl.id}`}>edit</Link></td>

<td><Link type="button" class="btn btn-success"   onClick={() => deleteUser(userl.id)} >Delete</Link></td>
    
	</tr>
	))
	}

  
    
  </tbody>
</table>

</div>
 </>
	);

}



export default Home;

