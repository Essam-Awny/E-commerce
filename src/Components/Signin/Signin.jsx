import axios from "axios";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Signin() {
    let navigate = useNavigate()
    let [errMsg , setErrMsg] = useState('')
    let [loading , setLoading] = useState(true)

 async function sendDataToApi(values){
    try{
      setLoading(false)
        let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values)
        console.log(data);
        if(data.message === 'success'){
            localStorage.setItem('token', data.token)
            navigate('/home')
        }
        
    }catch(error){
        console.log(error.response.data.message);
        setErrMsg(error.response.data.message);
        setLoading(true)
        
    }
   
   
  }
  const validationSchema = Yup.object({

    email: Yup.string().email("Invalid email format").required("Email is required"),
   
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,}$/, "Password must start with a capital letter and be at least 6 characters long")
      .required("Password is required"),
  
  });

  function handleSubmit(values) {
    sendDataToApi(values)
  }

  let myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema, 
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto mt-5">
        <h2 className="mb-3">Login Now:</h2>
        <form onSubmit={myFormik.handleSubmit}>
       

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

export default Signin;
