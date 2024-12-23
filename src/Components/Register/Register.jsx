import axios from "axios";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
    let navigate = useNavigate()
    let [errMsg , setErrMsg] = useState('')
    let [loading , setLoading] = useState(true)

 async function sendDataToApi(values){
    try{
      setLoading(false)
        let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)
        console.log(data);
        navigate('/signin')
        
    }catch(error){
        console.log(error.response.data.message);
        setErrMsg(error.response.data.message)
        setLoading(true)
        
    }
   
   
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Must be at least 3 characters").max(20, "Must be 20 characters or less").required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone number")
      .required("Phone is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,}$/, "Password must start with a capital letter and be at least 6 characters long")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  function handleSubmit(values) {
    // console.log("Form Submitted Successfully!", values);
    sendDataToApi(values)
  }

  let myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema, 
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto mt-5">
        <h2 className="mb-3">Register Now:</h2>
        <form onSubmit={myFormik.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            value={myFormik.values.name}
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            type="text"
            className="form-control mb-3"
            id="name"
            name="name"
          />
          {myFormik.errors.name && myFormik.touched.name ? (
            <div className="alert alert-danger">{myFormik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email:</label>
          <input
            value={myFormik.values.email}
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            type="email"
            className="form-control mb-3"
            id="email"
            name="email"
          />
          {myFormik.errors.email && myFormik.touched.email ? (
            <div className="alert alert-danger">{myFormik.errors.email}</div>
          ) : null}

          <label htmlFor="phone">Phone:</label>
          <input
            value={myFormik.values.phone}
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            type="tel"
            className="form-control mb-3"
            id="phone"
            name="phone"
          />
          {myFormik.errors.phone && myFormik.touched.phone ? (
            <div className="alert alert-danger">{myFormik.errors.phone}</div>
          ) : null}

          <label htmlFor="password">Password:</label>
          <input
            value={myFormik.values.password}
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            type="password"
            className="form-control mb-3"
            id="password"
            name="password"
          />
          {myFormik.errors.password && myFormik.touched.password ? (
            <div className="alert alert-danger">{myFormik.errors.password}</div>
          ) : null}

          <label htmlFor="rePassword">Confirm Password:</label>
          <input
            value={myFormik.values.rePassword}
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            type="password"
            className="form-control mb-3"
            id="rePassword"
            name="rePassword"
          />
          {myFormik.errors.rePassword && myFormik.touched.rePassword ? (
            <div className="alert alert-danger">{myFormik.errors.rePassword}</div>
          ) : null}
            
            {errMsg ? <div className="alert alert-danger">{errMsg}</div>: ''}
            <button 
            disabled={!(myFormik.isValid && myFormik.dirty)} 
            type="submit" 
            className="btn btn-success">
            {loading? 'Submit' :<i class="fa-solid fa-spinner fa-spin"></i>}
          </button>

          
        </form>
      </div>
    </>
  );
}

export default Register;
