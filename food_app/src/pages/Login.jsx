import React from 'react'
import { toggle,token } from '../utils/Slices/loginSlice'
import {  useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import registationServices from '../hooks/login'
import { useNavigate } from 'react-router-dom'
import {validationLogin} from '../utils/validation/validation'

const Login = () => {

   const [name,setName] = useState()
   const [email,setEmail] = useState()
   const [password,setPassword] = useState()
   const [number,setNumber] = useState()
   const [role,setRole] = useState("User")
    const [validtaionError,setValidationError] = useState()

    

  const dispatch = useDispatch()
  const {initial} = useSelector((store)=> store.login)
 

  const navigate = useNavigate()

  const signupSubmit = async(e)=>{
    e.preventDefault()
    
    const validtaionError = validationLogin.signupValidation(name,email,password,number)
   
    setValidationError(validtaionError)

    if(validtaionError){
      return
    }

    const data = {
      name:name,
      email : email,
      password : password,
      number : number,
      role : role
    }

    const res = await registationServices.signup(data)
    

    setValidationError(res.message)

    if (res.success === "false" || res.success === false) {
      
      return;
  }
   setValidationError("")
    dispatch(toggle())
    
  }


  

  const loginSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationLogin.loginValidation(email, password);
    
    setValidationError(validationError);

    // If there's a validation error, return early
    if (validationError) {
        return;
    }

    const data = {
        email: email,
        password: password
    };

    try {
        const res = await registationServices.login(data);
        setValidationError(res.message);


        const token = res.token 
        console.log(token,"token hu ji mai");

        localStorage.setItem("token",token)
        

        // If login is unsuccessful, return early
        if (res.success === "false" || res.success === false) {
          return;
      }
        
       
        navigate("/body");
    } catch (error) {
        console.error("Error occurred during login:", error);
        // Handle error as needed
    }
};



  const switcher = (e)=>{
    e.preventDefault()
    setValidationError("")
    dispatch(toggle())
  }


  return (
    <div class="relative bg-gray-300 h-[100vh]">
    <div class="absolute inset-0 z-10">
    </div>


    <form action="" class="flex justify-center z-40 relative ">
        <div class="flex flex-col w-2/3 md:w-1/4  gap-4  bg-white items-center p-10  rounded my-10"> 
            <h1 class="text-4xl text-center font-bold text-gray-800">{initial ? "Signup" : "Login"}</h1>
   
   {initial ?
   <input type="text" class=" border-4 border-gray-200 rounded-lg px-4 py-3 bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors duration-300 ease-in-out" placeholder="Please enter your name"
    onChange={(e)=> setName(e.target.value)}
   />  : ""}

            
      <input type="email" class="px-4 py-3 border-4 border-gray-200 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors duration-300 ease-in-out mt-3" placeholder="Please enter your email"
        onChange={(e)=> setEmail(e.target.value)}
      />
      <input type="password" class="px-4 border-4 border-gray-200 py-3 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors duration-300 ease-in-out mt-3" placeholder="Please enter your password"
         onChange={(e)=> setPassword(e.target.value)}
      />
      {initial ? <input type="number" class=" border-4 border-gray-200 px-4 py-3 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors duration-300 ease-in-out mt-3" placeholder="Number"
         onChange={(e)=> setNumber(e.target.value)}
      />  : ""} 

{initial ?   
    <select 
        name="role" 
        className="p-3 border-4 border-gray-200 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors duration-300 ease-in-out mt-3 appearance-none"
        onChange={(e)=> setRole(e.target.value)}
        defaultValue="User" // Set initial value to "User"
    >
        <option className="bg-white text-gray-800" value="User">User</option>
        <option className="bg-white text-gray-800" value="Creator">Creator</option>
    </select> 
: ""}

       <h2 className=' text-red-400 font-light text-2xl'>{validtaionError}</h2>
    
    {initial ? <button class="bg-red-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out" type="submit"
             onClick={signupSubmit}
            >SignUp</button> : <button class="bg-red-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out" type="submit"
            onClick={loginSubmit}
           >Login</button>}    

            <h3 class="text-white">Haven't signed up yet?
                <button class="text-red-900 mx-2" onclick="switcher(event)"
                onClick={switcher}
                >{initial ? "login" : "signup"}</button>
            </h3>
        </div>
    </form>
</div>

  )
}

export default Login