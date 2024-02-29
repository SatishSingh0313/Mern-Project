import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {

    let user = localStorage.getItem('user')


    return (
        <div className="user-profile">
            <h1>User Profile Details</h1>
            <h2>User Data : {(user)}</h2>
            <Link><img src='https://avatars.githubusercontent.com/u/123364494?s=400&u=3415b6de2fb6c187ee71672569548248419e25d1&v=4' alt="img"></img></Link>
            
        </div>
    )
}
export default Profile;
