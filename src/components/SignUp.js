import {React,useState} from "react";

const SignUp=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const CollectData=()=>{
        console.log(name,email,password);
    }

    return(
        <div>
            <h1>Register</h1>
            <input className="inpurBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inpurBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inpurBox"type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button type="button" onClick={CollectData}>Sign Up</button>
        </div>
    )
}
export default SignUp;