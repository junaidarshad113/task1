import { useFormik } from "formik";
import React from "react";
const Todosform = () => {
const formik=useFormik({
  initialValues:{
    email: "",
    password:'',
    repeatPassword:'',
    firstName:"",
    lastName:"",
    address:"",
    country:"",
    state:"",
    city:"",
    contactNumber:''
  },
  Todosform,
  onSubmit: values=>{
    alert(JSON.stringify(values,null,2));
  },
});
  return (
     <div>
      
      <br></br>
      <div className="container nt-5  border border- dark danger">
        <form className="row g-2 "  onSubmit={formik.handleSubmit}>
          <div className="input-group mb-3  ">
            <span className="input-group-text" id="basic-addon1"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
              aria-describedby="basic-addon1"
              
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text me-4" id="basic-addon1"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Repeat password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
             
            />
          </div>
          <h3>CONTACT INFORMATION </h3>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3"></span>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              
              aria-describedby="basic-addon3"
            />
            <span className="input-group-text me-4" id="basic-addon3"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="basic-url"
              aria-describedby="basic-addon3"
             
            />
          </div>
          <div className="input-group mb-3  ">
            <span className="input-group-text" id="basic-addon1"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              aria-label="Email"
             
              aria-describedby="basic-addon1"
            />
            
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3"></span>
            <input
              type="text"
              className="form-control"
              placeholder="select country"
              id="basic-url"
             
              aria-describedby="basic-addon3"
            />
            <span className="input-group-text me-4" id="basic-addon3"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Select state"
              id="basic-url"
             
              aria-describedby="basic-addon3"
            />
            <span className="input-group-text me-4" id="basic-addon3"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Select city"
              id="basic-url"
             
              aria-describedby="basic-addon3"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3"></span>
    
            <input
              type="text"
              className="form-control"
              value={"+92"}
              id="basic-url"
              aria-describedby="basic-addon3"
             
            />
            
           
          </div>
          
    <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">
              Submit
            </button>
            
          </div>
         
        </form>
        

        
      </div>
      <div>
            
           

        </div>
         <div className="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
    </div>
  );
  };
export default Todosform;
