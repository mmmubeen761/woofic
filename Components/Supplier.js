import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import signupside from "../Images/star.png";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Radio, { RadioProps } from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';


export default function Supplier() {
  let history = useHistory();

 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [supplies, setSupplies] = useState("");
  const [location, setLocation] = useState("");
  const [contact_number, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function SendLoginDetails(e) {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password incorrect!");
    } else if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      supplies === "" ||
      contact_number === "" ||
      location === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("Please fill all input feilds!");
    } else {
        
        const { data: response } = axios.post(
                `http://woofic-api.nastechltd.co/api/supplier`,
                {
                      first_name: firstname,
                      last_name: lastname,
                      email: email,
                      supplies: supplies,
                      location: location,
                      contact_number:contact_number,
                      password:password,
                      profile_image:'null',
                      rating:'5'
                }).then((response) => {
                  alert('We will review your apllication, and will email you as soon as possible')
                history.push("/");
            }, (Error) => {
                alert(Error)
                });
    }
  }


  return (
    <>

    
      <div className="container-fluid px-5 my-2 mx-auto w-100 ">
        <div className="card card0 border">
          <div className="row d-flex ">
            <div className="col-lg-6 py-4">
            <h5><Link className="text-danger px-3 p-2" to="/client" >Customer</Link><Link className="text-danger px-3 p-2" to="/serviceprovider">Service Provider</Link><Link className="text-danger px-3 p-2  shadow-sm border-3  rounded" to="/supplier">Supplier</Link></h5>
              <div className=" px-4 py-auto pt-4">
                <div className="row px-4">
                  <TextField className="mb-2"
                    id="Outlined-basic "
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstname(e.target.value)}
                    name="fulname"
                  />
                </div>
                <div className="row px-4">
                  <TextField className="mb-2"
                    id="Outlined-basic "
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastname(e.target.value)}
                    name="fulname"
                    />
                </div>
                <div className="row px-4 ">
                <TextField className="mb-2"
                    id="outlined-basic"
                    label="Email"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    name="fulname"
                  />
                </div>
                <div className="row px-4 ">
                  <TextField className="mb-2"
                    id="Outlined-basic "
                    fullWidth
                    label="Location"
                    variant="outlined"
                    onChange={(e) => setLocation(e.target.value)}
                    name="fulname"
                  />
                </div>
                <div className="row px-4 ">
                  <TextField className="mb-2"
                    id="Outlined-basic "
                    fullWidth
                    label="Supplies"
                    variant="outlined"
                    onChange={(e) => setSupplies(e.target.value)}
                    name="fulname"
                  />
                </div>
                <div className="row px-4 ">
                  <TextField className="mb-2"
                    id="Outlined-basic "
                    fullWidth
                    label="Contact Number"
                    variant="outlined"
                    onChange={(e) => setContact(e.target.value)}
                    name="fulname"
                  />
                </div>
                <div className="row px-4 ">
                <TextField className="mb-2"
                    id="outlined-basic"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    />
                </div>
                <div className="row px-4 ">
                <TextField className="mb-2"
                    type="password"
                    id="outlined-basic"
                    label="Confirm Passoword"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setCpassword(e.target.value)}
                    name="cpassword"
                  />
                </div>
                <div className="row mb-3 pl-4">
                  
                  <button
                    type="submit"
                    className="btn btn-blue text-center"
                    onClick={SendLoginDetails}
                  >
                    Signup
                  </button>
                </div>
                <div className="row mb-4 pl-4 pr-auto">
                  
                  <small className="font-weight-bold">
                    Already a member?
                    <Link className="text-danger" to="/login">
                      Login
                    </Link>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line my-auto">
                  <img src={signupside} className="image mt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
