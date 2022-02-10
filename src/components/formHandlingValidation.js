import { useFormik } from "formik";
import React from "react";

const validate= values=>{
  const errors = {};
  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '*Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = '*Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = '*Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = '*Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = '*Must be 20 characters or less';
  }
  if(!values.password){
    errors.password="*Required";
  }else if(values.password.length===16){
    errors.password="*password must be number character and string form"
  }
  if(!values.repeatPassword){
    errors.repeatPassword="*Please enter confirm password"
  }else if(values.password!=values.repeatPassword){
    errors.repeatPassword="*password not match"
  }
  if(!values.address){
    errors.address="*please enter valid address"
  }else
  if(values.address.length<=10){
   errors.address="*length of address must be greater than 10 digits"
  }
if(!values.country){
  errors.country="*Required"
}
if(!values.state){
  errors.state="*Required"
}
if(!values.city){
  errors.city="*Required"
}
if(!values.contact){
  errors.contact="*Required"
}

  return errors;
 
};


const formHandlingValidation = () => {  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'' ,
      repeatPassword:'',
      address:'',
      country:'',
      state:'',
      city:'',
      contact:'',
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
      <div>
          <form>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  </form>

          <div className="container nt-5  border border- dark danger">
    <form className="row g-2 " onSubmit={formik.handleSubmit}>
      
     <div className="input-group mb-3  ">
    
    
     <span className="input-group-text" id="basic-addon1"></span>
     
      <input
        id="email"
        name="email"
        type="text"
        className="form-control"
        placeholder='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <div className="text-danger fs-6 ">{formik.errors.email}</div>
      </div>
      
       
      <div className="input-group mb-3   ">
        
     <span className="input-group-text" id="basic-addon1"></span>
      <input
        id="password"
        name="password"
        type="text"
        className="form-control"
        placeholder='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        aria-describedby="basic-addon1"
      />
     
      <div  className="text-danger fs-6  "> {formik.errors.password}</div>
     
      <span className="input-group-text ms-4" id="basic-addon1"></span>
      <input
      className="form-control"
        id="repeatPassword"
        name="repeatPassword"
        type="text"
        placeholder='repeatPassword'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repeatPassword}
        aria-describedby="basic-addon1"
      />
       <div  className="text-danger fs-6 "> {formik.errors.repeatPassword}</div>
     
      </div>
      <h3>CONTACT INFORMATION </h3>
      <div className="input-group mb-3  ">
     <span className="input-group-text" id="basic-addon1"></span>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className="form-control"
        placeholder='firstName'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        aria-describedby="basic-addon1"
      />
       <div  className="text-danger fs-6 "> {formik.errors.firstName}</div>

      <span className="input-group-text ms-4" id="basic-addon1"></span>
      <input
      className="form-control"
        id="lastName"
        name="lastName"
        type="text"
        placeholder='lastName'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        aria-describedby="basic-addon1"
      />
      <div  className="text-danger fs-6 "> {formik.errors.lastName}</div>

      </div>
      <div className="input-group mb-3  ">
     <span className="input-group-text" id="basic-addon1"></span>
      <input
        id="address"
        name="address"
        type="text"
        className="form-control"
        placeholder='address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      <div  className="text-danger fs-6 "> {formik.errors.address}</div>
      
      </div>
      <div className="input-group mb-3">
     <span className="input-group-text" id="basic-addon1"></span>
      <input
        id="country"
        name="country"
        type="text"
        className="form-control"
        placeholder='country'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
        aria-describedby="basic-addon1"
      />
      <div  className="text-danger fs-6 "> {formik.errors.country}</div>
    
      <span className="input-group-text ms-4" id="basic-addon1"></span>
      <input
      className="form-control"
        id="state"
        name="state"
        type="text"
        placeholder='state'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
        aria-describedby="basic-addon1"
      />
      <div  className="text-danger  fs-6 "> {formik.errors.state}</div>
      
      <span className="input-group-text ms-4" id="basic-addon1"></span>
      <input
      className="form-control"
        id="city"
        name="city"
        type="text"
        placeholder='city'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
        aria-describedby="basic-addon1"
      />
      <div  className="text-danger fs-6 "> {formik.errors.city}</div>

      <div/>
      </div>
      <div className="input-group mb-3  ">
     <span className="input-group-text" id="basic-addon1"></span>
      <input
        id="contact"
        name="contact"
        type="text"
        className="form-control"
        placeholder='contact'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contact}
      />
    <div  className="text-danger fs-6 "> {formik.errors.contact}</div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
    </form>
    </div>
    </div>
    
  );
  };
  export default formHandlingValidation;
