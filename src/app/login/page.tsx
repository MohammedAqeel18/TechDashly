import LoginForm from "./LoginForm";


export default function LoginPage(){


    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-100 ">
         <div className=" w-full max-w-md bg-white rounded-2xl shadow-xl p-8">   
         <h1 className="text-3xl font-bold text-center text-slate-800 mb-2"> Welcome Back</h1>

         <p className="text-center text-slate-500 mb-6"> Please Sign in Continue</p>
         <LoginForm/>
        </div>
        </div>
    )
}