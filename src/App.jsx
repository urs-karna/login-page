

import { useState } from 'react'
// import './App.css'

function App() {
  const [Data,setdata]= useState({
    username:'',
    password:'',
  })
   const  {username,password} = Data;
   const changer = (e) => {
    setdata({...Data,[e.target.name]:[e.target.value]}) 
    
   } 
   
   
    const   submitHandler= (e) => { 
      e.preventDefault();
      {error_msg}
      
      console.log(Data);
      
    }
  return (
    <> 
    <h1 className='text-center font-bold text-2xl mb-0 mt-5 '>Login Your Account</h1>
    <form onSubmit={submitHandler}>
    <div className='flex justify-center items-center flex-col'>
     <div className='container bg-zinc-200 max-w-[600px] flex justify-center items-center flex-col mt-5'>

     <p className=' text-2xl p-4 font-semibold'>Enter username:
      <input className='p-4 border m-2 border-cyan-700 text-xl font-semibold text-blue-600 hover:bg-slate-200' type="text" name='username' value={username} onChange={changer} placeholder='enter your username ' required />
       </p>
         
         
          <p className='text-2xl p-4 font-semibold'>Enter password:
          <input className='p-4 border m-2 border-cyan-700 text-xl font-semibold text-blue-600 hover:bg-slate-200' type="password" name='password' value={password} onChange={changer} placeholder='enter your password'  required/>
          </p>

         <div className='flex justify-between' >
         <button className='p-3 my-5 mr-72 rounded-xl   bg-red-500 hover:bg-red-700 hover:text-slate-100 font-serif font-bold '  > Forget password ?</button>
          <input className='p-3 my-5  ml-10 rounded-xl bg-yellow-400 hover:bg-yellow-600 hover:text-slate-100 font-serif font-bold ' type="submit" name='submit' />
         </div>
         <button className='p-3 my-5  rounded-2xl  bg-green-500 hover:bg-green-700 hover:text-slate-100 font-serif font-bold '  > Sign Up</button>

     </div>
     </div> 
     </form>
      </>
  )
}

export default App
