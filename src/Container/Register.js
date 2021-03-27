import  React  from 'react';
import classes from '../Container/Register.module.css';

import Axios from 'axios'

class Register extends React.Component{

    onRegisterClick=(e)=>{
       
        e.preventDefault();

        const userName =e.target.userName.value;
        const emailId =e.target.emailId.value;
        const phone =e.target.phone.value;
        const password =e.target.password.value;

        Axios.post('http://localhost:8000/api/user', {userName: userName,emailId:emailId,phone:phone, password: password})
            .then(res => {
                alert('Register Successful!')
                 localStorage.setItem('RegisterStatus', true);
                // this.props.onUserLoggedIn();
                
            })
            .catch(res => {
            });

        }



    render(){
    return(
        <div className={classes.MainPage}>

        <form className={classes.Login} onSubmit={this.onRegisterClick}>
        
         <h1>Sign UP</h1>
        
        <input className={classes.InputField}
               type="text" 
               name="userName" 
               placeholder="Enter Username" />

        <input className={classes.InputField}
                type="email"
                name="emailId"
                placeholder="Enter Email Id"/>
        
        <input className={classes.InputField}
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number"/>
    
        <input className={classes.InputField}
                type="password" 
                name="password"
                placeholder="Enter Password" />
    
        <input className={classes.Button}
                type="submit" 
                value="Register"/>
    
    </form>
    
    </div>
    
    );

    }
}

export default Register;