import LoginForm from "./LoginForm";


export default function LoginPage(){


    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-100 ">
         <div className=" w-full max-w-md  shadow-xl p-8 bg-black/100   text-white">   
         <h1 className="text-3xl font-bold text-center text-red-800 mb-2"> Welcome Back</h1>

         <LoginForm/>
<span>

</span>
        </div>
        </div>
    )
}