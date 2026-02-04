import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0);

  function incrementNumber(){
    if(count < 20){
        setCount((count)=>count+1);
    }
    
  }

  
  function decrementNumber(){
    if(count > 0 ){
      setCount((count)=>count-1);
    }
    
  }

  

  function resetValue(){
    setCount (0);
  }


  return (
    <div className='flex flex-col gap-4'>
      
      <p className='text-4xl'>Current count:  {count}</p>
      <div className=' flex gap-4 ' >
       <button className='border-2 border-amber-50 p-2 rounded' onClick={incrementNumber} >Increment</button>
       <button className='border-2 border-amber-50 p-2 rounded' onClick={decrementNumber}>Decrement</button>
      </div>
      <div>
        <button className='border-2 border-amber-50 p-2 rounded ml-16' onClick={resetValue}>Reset</button>
      </div>
      
    </div>
  )
}

export default Counter