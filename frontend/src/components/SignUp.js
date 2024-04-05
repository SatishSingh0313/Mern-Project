import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }

    })

    const CollectData=async()=>{
        console.log(name,email,password);
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json()
        console.log(result)

       localStorage.setItem('user',JSON.stringify (result.result));
       localStorage.setItem('token',JSON.stringify (result.auth));

        navigate('/')
       
    }

    return(
        <div className="signup">
            <h1>Register</h1>
            <input className="inpurBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inpurBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inpurBox"type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="btn" type="button" onClick={CollectData}>Sign Up</button>
        </div>
    )
}
export default SignUp;