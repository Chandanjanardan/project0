import React, { useEffect, useState } from 'react'

function Popup({setPopup}) {
  const [path,setPath]=useState("")
  const [data,setData]=useState(0)
  const [publish,setPublish]=useState(false)
  const [testSucc,setTestSucc]=useState(false)
  const [progress, setProgress] = useState(0);
  async function handleTest(){
    let response= await fetch(`${path}`,{
      method:"GET"
    })
  try {
    if(response.status!==200){
      alert("Something went wrong")
    }else{
      let value= await response.json()
      setData(value)
      setPublish(true)
      const totalSteps = 100;
      const stepTime = 500 / totalSteps; 
      for (let i = 1; i <= totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, stepTime));
        setProgress(Math.floor((i / totalSteps) * 100));
      }
      setTestSucc(true)

    }
    
  } catch (error) {
    alert("Something went wrong")
  }
   
  }
  useEffect(()=>{
    setPublish(false)
  },[path])
 
  
  return (
    <section className='popup'>
      <div className="popup-container">
      <div className="popup-head">
        <h2>RAG SetUp</h2>
        <svg className='close' onClick={(e)=>setPopup(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div className="popup-path">
        <label>Data Source Path...</label>
        <div>
          <input onChange={(e)=>setPath(e.target.value)}placeholder='Path...' />
          {path?<button onClick={handleTest} disabled={false}>{testSucc?"Test Successfull":"Test"}</button>:
          
          <button disabled={true} style={{ opacity: '0.5', cursor: 'not-allowed' }}>Test</button>
         
          }
          {testSucc?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 success">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
:null}

        </div>
      </div>
      <div className="popup-progress">
        <p>Progress Bar:</p>
        {/* <div className='progress' style={{textAlign:"center"}}>
          <p>{loading}%</p>
        </div> */}
        <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
        
      </div>
      <div className="popup-publish">
        {publish?<button onClick={(e)=>setPopup(false)} disabled={false}>Publish</button>:
      <button disabled={true}  style={{ opacity: '0.5', cursor: 'not-allowed' }}>Publish</button>}

      </div>
      </div>
    </section>
  );
}

export default Popup;

