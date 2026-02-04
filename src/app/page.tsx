import LoginButton from "./components/loginbutton/LoginButton";
import Button from "./components/loginbutton/LoginButton";

export default function Home(){
  return(
    <div>
      <h1 className="text-3xl font-bold underline"> Hello Next.js</h1>
      <LoginButton/>
    </div>
  )
}