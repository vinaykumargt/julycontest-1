import React,{useState} from 'react';
import './Form.css';

const Form = () => {

    let [user, setUser] = useState({ name: '', email:'', password: '', confirmPassword:''});
    let [error, setError] = useState('');
    let [success, setSuccess] = useState('');

    function validateForm(event){
        // event.preventDefault();

        if(user.name.length < 3 || user.name.length > 30){
            event.preventDefault();
            setSuccess('');
            setError('Name must be between 4 and 30 characters long');
        }
        else if(!(user.email.includes("@") || user.email.includes("."))){
            event.preventDefault();
            setSuccess('');
            setError("Invalid Email");
            }
            else if(user.password.length < 8){
                event.preventDefault();
                setSuccess('');
                setError("Password should have atleast eight character")
                }
                else if(user.password !== user.confirmPassword){
                    event.preventDefault();
                    setSuccess('');
                    setError("Passwords do not match!")
                }
                else{
                    setError('');
                    setSuccess(`User created successfully!`);
                }


    }
                                


  return (
    <div>
      <h1>Create Account</h1>
      <div className='signUpOpt'>
        <p>Sign Up with Google</p>
        <p>Sign Up with Facebook</p>
      </div>
      <h2>-OR-</h2>
      {/* form */}
      <form onSubmit={validateForm}>

        <input type="text" id="name" placeholder='Full Name' 
           onChange={(e) => setUser({...user, name:e.target.value})}/><br /><br />
        
        <input type="text" id="email" placeholder='Email Address' 
           onChange={(e) => setUser({...user, email:e.target.value})}/><br /><br />
        
        <input type="password" id="password" placeholder='Password' 
           onChange={(e) => setUser({...user, password:e.target.value})}/><br /><br />
        
        <input type="password" id="confirmPassword" placeholder='Confirm Password' 
           onChange={(e) => setUser({...user, confirmPassword:e.target.value})}/><br /><br />
        
        <button type="submit" >Create Account</button>
      
      </form>

      {error && <h4 id="error">Error is:{error}</h4>}
      {success&&<h4 id="success">{success}</h4>}
    </div>
  )
}


export default Form;