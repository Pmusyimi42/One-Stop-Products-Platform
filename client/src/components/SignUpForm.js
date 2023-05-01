import React, { useState } from "react";
import './SignUpForm.css';
import { useNavigate, Link} from "react-router-dom";
import cartoon from "../images2/signup.png"
import styles from "./Signup.module.css"
import * as AiIcons from "react-icons/ai";


import { toast } from "react-toastify";

function Signup() {
  const [signupFormData, setSignupFormData] = useState({
      name: '',
      email:'',
      password: '',
  })
    const navigate = useNavigate()

  const [errors, setErrors] =useState({})
  // function to handle new registrations of applicants
  // function to post applicants to database
  function handleSignupChange(e){
      const name = e.target.name
      const value = e.target.value
      setSignupFormData({
        ...signupFormData,[name] :value
      })
  }


  function handleSignup(e) {
    e.preventDefault();

    //Post new users

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(signupFormData)
    })
      .then((res) => {
        if(res.status===422){
          res.json()
          .then(data =>{
            setErrors(data.errors)
          })
        }else{
          res.json()
          .then(data=>{
             console.log(signupFormData)
        //Display succesfull response
        toast.success("Succesfully Registered");
        //navigates to login page
        //will redirect to login page
        navigate("/login");
          })
        }
      })

      e.target.reset()
  }
console.log(errors);
  return (
    <div className={styles.body_container}>

        <form className={styles.form_container} onSubmit={handleSignup}>
        <div>
        <Link to={"/"} style={{ color: "white"}}> <AiIcons.AiFillHome /> HOME </Link>
        </div>
        <h2 style={{fontFamily: "Fredoka, sans-serif"}}>Sign up</h2>
         
          <div className={styles.input_container}>
            <label className={styles.input_label}>Name</label>
            <input className={styles.input_field} value={signupFormData.name} onChange={handleSignupChange} name="name" type="text" placeholder="Name" />
            {errors.name ? errors.name.map((err,index)=> <p className="error" key ={index}>*Name {err}!</p>):null}
       
       
            <label className={styles.input_label}>Email</label>
            <input className={styles.input_field} value={signupFormData.email} onChange={handleSignupChange} name="email" type="email" placeholder="Email" />
            {errors.email ? errors.email.map((err,index)=> <p className="error" key ={index}>*Email {err}!</p>):null}
          

            <label className={styles.input_label}>Password</label>
            <input className={styles.input_field} value={signupFormData.password} onChange={handleSignupChange} name="password" type="password" placeholder="Password" />
            {errors.password ? errors.password.map((err,index)=> <p className="error" key ={index}>*Password {err}!</p>):null}
          
        </div>

        <div className={styles.separator} style={{color: 'GrayText'}}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color : 'white'
            }}
          >
            Log in
          </Link>
          <hr className={styles.line} />
        </div>
        
        <button className={styles.sign_in_btn}>
          <span>Create account</span>
        </button>
          

          {/* <div className="form-submit">
            <button type="submit" className="btn">Sign Up</button>
          </div> */}

        </form>
        <div className={styles.login_gradient}/> 


        {/* Switch to Logging In */}
        {/* <p className="container">
            Already have an account?<a href="/login">Log in</a>
        </p> */}

    </div>
  );
}

export default Signup;








// function SignUpForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const navigate = useNavigate()
  
  
 

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handlePasswordConfirmationChange = (event) => {
//     setPasswordConfirmation(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//       password_confirmation: e.target.password_confirmation.value,
//     };

//     fetch("/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
   
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setName('');
//         setEmail('');
//         setPassword('');
//         setPasswordConfirmation('');
//         //this redirects to login page after sign up
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="signup-form border">
//     <div className="mx-auto flex justify-center items-center">
//         <div className="hidden md:block max-w-lg">
//             <img className="w-full" src={cartoon} alt="Sitting" />
//         </div>

//     <form onSubmit={handleSubmit}>

//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={handleNameChange}
//         required
//       />

//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />

//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={handlePasswordChange}
//         required
//       />

//       <label htmlFor="password_confirmation">Confirm Password</label>
//       <input
//         type="password"
//         id="password_confirmation"
//         value={passwordConfirmation}
//         onChange={handlePasswordConfirmationChange}
//         required
//       />

//       <button type="submit">Sign Up</button>
//     </form>
//     </div>
//     </div>
    
//   );
// }

// export default SignUpForm;

