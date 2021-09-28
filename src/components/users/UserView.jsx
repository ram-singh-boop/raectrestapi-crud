import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const UserView = () => {


const [user, setUsers] = useState({
	name: "",
	username:"",
	email:"",
	phone:"",
	website:""
});



const {id} = useParams();

useEffect( ()=>{
	loaduser();
}, []
);

const loaduser = async () =>{
  const res = await axios.get(`http://localhost:3002/users/${id}`);
  console.log(res);

  setUsers(res.data);
}


	return(
 <>
 <h1>
UserView
</h1>

<Link type="button" className="btn btn-success" to="/">bacn to home</Link>
<h1>user id: {id}</h1>
<hr/>
<ul>
<li>name:{user.name}</li>
<li>username:{user.username}</li>
<li>email:{user.email}</li>
<li>phone:{user.phone}</li>
<li>website:{user.website}</li>


</ul>
 </>
	);

}



export default UserView;

