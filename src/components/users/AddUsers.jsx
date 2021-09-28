import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUsers = () =>{
let history = useHistory();
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
	await axios.post("http://localhost:3002/users", user);
	history.push("/");

};
	
	return(
     <>
      <div class="container mt-5 text-left boxshadow border p-5">

     <h1>AddUsers</h1>

     <form onSubmit={e => OnSumit(e) }>

  <div className="form-group">
    <input type="text" className="form-control" name="name"  value={name} onChange={(e) => onInputChange(e)}  placeholder="Enter name" />
  </div>

   <div className="form-group">
    <input type="text" className="form-control" name="username"  value={username} onChange={(e) => onInputChange(e)}  placeholder="Enter username" />
  </div>

   <div className="form-group">
    <input type="email" className="form-control" name="email"  value={email} onChange={(e) => onInputChange(e)}   placeholder="Enter email" />
  </div>

    <div className="form-group">
    <input type="text" className="form-control" name="phone"  value={phone} onChange={(e) => onInputChange(e)}  placeholder="Enter phone" />
  </div>

   <div className="form-group">
    <input type="text" className="form-control" name="website"  value={website} onChange={(e) => onInputChange(e)}   placeholder="Enter website name" />
  </div>


 
  <button type="submit" className="btn btn-primary">addd users</button>

</form>

</div>

     </>
	);
}

export default AddUsers;