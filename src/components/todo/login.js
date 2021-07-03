import React, { useState, useEffect ,useContext}from 'react';
import { LoginContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';

const CompletedLogin = (props) => {
    
    const context = useContext(LoginContext)
  
        // super(props);
        // this.state = {
        //     username: '',
        //     password: ''
        // }

        const [username,setUsername] =useState('')
        const [password,setPassword] =useState('')
    

  const  handleSubmit = (e) => {
        e.preventDefault();
       
        context.login(e.target.username.value,e.target.password.value  );
    }

    const handleSignup = (e) => {
        e.preventDefault(); 

        
        console.log(e.target.username.value,e.target.password.value,e.target.email.value ,e.target.select.value ,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

        context.signup(e.target.username.value,e.target.password.value,e.target.email.value ,e.target.select.value )
    }

    const  handleChange = (e) => {
        // setState({ [e.target.name]: e.target.value  });
        // this.setState({ username: admin  });
        // this.setState({ password: 123456  });
        if(e.target.name===username){
            setUsername(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }

    console.log(context.loggedIn,'context.loggedIn') ;
  
        return (
       
        
        <If condition={context.loggedIn}>
        <Then>
            <button onClick={context.logout}>Log out</button>
        </Then>
        <Else>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={handleChange} />
                <input type="text" name="password" placeholder="password" onChange={handleChange} />
                <button>Login</button>
            </form>

            <form onSubmit={handleSignup}>
                <label>signup </label>
       <input type="text" name="username" placeholder="username" />
       <input type="text" name="password" placeholder="username" />
       <input type="text" name="email" placeholder="username" />
       <select name="select">
           <option name="user" id="user" value="user">User </option>
           <option name="admin" id="admin"value="admin" >Admin </option>
           <option name="editor" id="editor" value="editor"> Editor </option>
           <option name="writer" id="writer" value="writer"> Writer </option>
        
           
       </select>
       <button>signup</button>

                </form>

        </Else>
    </If>
     
        );
    
}

export default CompletedLogin;