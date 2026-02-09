"use client";

import LoginButton from "../components/loginbutton/LoginButton";
import Link from "next/link";

export default function LoginForm(){

    return(

        <form className="space-y-4">
            <div >
            <label className=" block text-sm mb-1 text-gray-300"> Username </label>
           
        <input
        name="username"
        required
      autoComplete="username"
      placeholder="Enter your username"
        className="w-full px-4 py-3 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
 </div>

 <div>
     
        <label className="block text-sm mb-1 text-gray-300"> Password</label>
        <input
        
        name="password"
        type="password"
        required
        autoComplete="currentpassword"
        placeholder="Password"
        className="w-full px-4 py-3 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
    </div>
 
  <div className="flex items-center justify-between text-sm text-gray-400">
        <Link href="/forgot-password" className="hover:text-red-400">Forgot Password </Link>    
        </div> 
       <LoginButton/>
    
    <p className="text-center text-sm text-gray-400 pt-4">
        Don't have an account?{" "}
        <Link
        href="/register" className="text-red hover:underline font-medium"
        >
        Sign up
        </Link>
    </p>
    
        </form>
    )
}