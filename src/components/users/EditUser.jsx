import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () =>{
let history = useHistory();
const {id} = useParams();
//alert(id);

const [user, setUsers] = useState({
	name: "",
	username:"",
	email:"",
	phone:"",
	website:""
});
 
 const { name, username, email, phone, website } = user;
 
 const onInputChange = (e) => {
 console.log(e.target.value);

  setUsers({...user, [e.target.name]: e.target.value}); 
 }

const OnSumit = async e =>{
	e.preventDefault();
	alert('sddssd');
	await axios.put(`http://localhost:3002/users/${id}`, user);
	history.push("/");

};

useEffect( () =>{

  loaduser();
}, []

);


const loaduser = async () =>{
  const result = await axios.get(`http://localhost:3002/users/${id}`);
  console.log(result);

  setUsers(result.data);
}


	
	return(
     <>
      <div class="container mt-5 text-left boxshadow border p-5">

     <h1>EditUsers</h1>

     <form onSubmit={e => OnSumit(e) }>

  <div className="form-group">
    <input type="text" className="form-control" name="name"  value={name} onChange={(e) => onInputChange(e)}  placeholder="Enter name" />
  </div>

   <div className="form-group">
    <input type="text" className="form-control" name="username"  value={username} onChange={(e) => onInputChange(e)}  placeholder="Enter username" />
  </div>

   <div className="form-group">
    <input type="text" className="form-control" name="email"  value={email} onChange={(e) => onInputChange(e)}   placeholder="Enter email" />
  </div>

    <div className="form-group">
    <input type="text" className="form-control" name="phone"  value={phone} onChange={(e) => onInputChange(e)}  placeholder="Enter phone" />
  </div>

   <div className="form-group">
    <input type="text" className="form-control" name="website"  value={website} onChange={(e) => onInputChange(e)}   placeholder="Enter website name" />
  </div>


 
  <button type="submit" className="btn btn-primary">update users</button>

</form>

</div>

     </>
	);
}

export default EditUser;