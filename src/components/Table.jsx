import React, { useState } from 'react'
import Nav from './Nav'
import "../App.css"
import Popup from './Popup'
import Filter from './Filter'
import Content from './Content'

function Table() {
    const [popup,setPopup]=useState(false)
   
    console.log(popup)
  return (
    <>
   <Nav/>
   {/* {popup===false?
   <Filter setPopup={setPopup}/>:<Popup setPopup={setPopup}/>
   } */}
   <Filter setPopup={setPopup}/>
   {popup && <Popup setPopup={setPopup}/>}
   <Content/>
    </>

  )
}

export default Table