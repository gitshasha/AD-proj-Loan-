import React from 'react'
import Form from './Form'
import {useNavigate} from "react-router-dom"
import "../Styles/Home.css"
export default function Home() {
  const navi=useNavigate()
  return (
    <div className='cont'>
      <div className="contimg"></div>
      <div className="content">
        <h1>Loan Approval</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorum, esse sunt quod eum necessitatibus modi neque, maxime ut sequi suscipit obcaecati ullam nam vero nesciunt voluptas possimus ratione delectus!</p>
        <button onClick={()=>{navi("/form")}}>Test</button>
      </div>
    </div>
  )
}
