"use client";

import LoginButton from "../components/loginbutton/LoginButton";
import LogoutButton from "../components/logoutbutton/LogoutButton";

export default function LoginForm(){

    return(

        <form className="space-y-4">
        <input
        name="username"
        placeholder="User Name"
        className="w-full px-4 py-3 border border-blue-300 focus:outline-none focus:ring-blue-500"
        />

        <input
        
        name="password"
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-blue-300 - focus:outline-none focus:ring-blue-500"
        />
    <div className="flex gap-4 pt-4"> 
        <LoginButton/>
       <LogoutButton/>
    </div>
    

    

        </form>
    )
}