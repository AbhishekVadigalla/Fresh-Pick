import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Vegetables.json'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = ({addToCart}) => {
  let navigate=useNavigate()
  const [search,setSearch]=useState("")
  const filterdVegetables=data.filter(vegetable=>vegetable.Name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='backGround'>
      <div style={{position:'fixed',zIndex:'1',width:'100%'}} className='header'>
        <nav class="navbar  navbar-dark bg-dark ">
          <div class="container-fluid">
            <a style={{color:'lightgreen',fontFamily:"initial",fontWeight:'bold',fontSize:'28px'}} class="navbar-brand">FreshPick</a>
            <form class="d-flex" role="search">
              <input onChange={(e)=>setSearch(()=>e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-info" type="submit">Search</button> &sbpn;
              <button onClick={()=>navigate('/Login')} class="btn btn-success" type="submit">Login</button>&sbpn;
              <button onClick={()=>navigate('/Cart')} class="btn btn-outline-warning" type="submit">Cart</button> 
            </form>
          </div>
        </nav>
      </div>
      <div className='container-fluid'>
        <div className='row'>
        {
          filterdVegetables.length>0?(filterdVegetables.map(info=>(
          <div className='col-md-3 col-12 mt-4 mb-4'>
             <div class="card" style={{width: "18rem",backgroundColor:'lightGrey',marginTop:'48px',marginLeft:'30px'}}>
              <img style={{height:'200px'}} src={info.Image} class="card-img-top" alt="Something Went Wrong..."/>
              <div class="card-body">
                <h3 class="card-title">{info.Name}</h3>
                <h5 class="card-title">Price : {info.Price}/Kg</h5>
                <button onClick={()=>addToCart(info,info.id)} href="#" type='button' class="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>))):(<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}} className='col-12'>
            <h2 style={{fontFamily:"serif",fontWeight:'bold',color:'maroon'}}>No Items Found😢</h2>
          </div>)
        }
        </div>
      </div>
    </div>
  )
}
export default Home
