import React from 'react'

function Filter({setPopup}) {
  return (
    <section className='filter'>
   <div className="fineTune">
        <h3>Fine Tune</h3>
        <div className='filter-options'>
            <div className="name mix ">
                <label>Chatbot Name</label>
                <input placeholder='Name...'/>
            </div>
            <div className="knowledge mix">
                <label>Knowledge Base</label>
                <input placeholder='URL...'/>
            </div>
           <div>
            {/* <label>Domains</label>
            <input placeholder='Domain'/> */}
             <label className='domain'>Domains</label>
            <select className='dropdown'>
                <option value="" disabled selected hidden> Domain</option>
                 <option value="domain1">Domain 1</option>
                 <option value="domain2">Domain 2</option>
                <option value="domain3">Domain 3</option>
               
            </select>
           </div>
        </div>
        <div className="row-two">
        <select className='dropdown'>
                <option value="" disabled selected hidden> Memory:</option>
                 <option value="domain1">5 Days</option>
                 <option value="domain2">10 Days</option>
                <option value="domain3">15 Days</option>
                
            </select>
            <select className='dropdown'>
                <option value="" disabled selected hidden>Advance Parameters</option>
                 <option value="domain1">PlaceHolder 1</option>
                 <option value="domain2">PlaceHolder 2</option>
                <option value="domain3">PlaceHolder 3</option>
               
            </select>
           <button onClick={()=>setPopup(true)} >
            Build Chatbot
           </button>
        </div>
    </div>
    </section>
  )
}

export default Filter