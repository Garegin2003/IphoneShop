import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"
import './SignUp.css'

function SignUp(){
    const [ arr, setArr ] = useState([])
    const validationSchema = yup.object().shape({
        email:yup.string().typeError("petq e lini tox").email("Dont have email").required("required"),
        password:yup.string().typeError("petq e lini tox").required("required"),
    } )

    return(
        <Formik
        initialValues={{
            email:"",
            password:"",
        }}
        onSubmit={(values, {resetForm})=> {
           setArr([
            ...arr,
            values
           ])
            resetForm()
          
        }}
        validateOnBlur
        validationSchema={validationSchema}
        >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
            <div className="signUp">
                <form   onSubmit={handleSubmit}>
                    <h1>SignUp</h1>
                    <label>email</label>
                    <input type={"text"}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder=""/>
                    {touched.email && errors.email && <p  style={{
                        color:"red"
                    }}>{errors.email}</p>}
                    
                    <label>password</label>
                    <input type={"text"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder=""/>
                    {touched.password && errors.password && <p  style={{
                        color:"red"
                    }}>{errors.password}</p>}
                    
                    <button type="submit" disabled={!isValid || !dirty}><span>Sign Up</span></button>
                    <Link to={'/signin'}>Don't have an account?</Link>
                </form>
            </div>
        )}
        </Formik>
    )
    
}
export default SignUp