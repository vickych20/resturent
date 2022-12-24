import React from 'react'
import './header.css';
import { FiFeather } from 'react-icons/fi'
import piza from '../../assets/pizza.png'

const header = () => {
  return (
    <>
      <div className='headup'>

      <div className="head">
        <h1>Chase The New Flavour</h1>
        <FiFeather  className='icon'/>
        <h1 className='the'>The Key To Fine Dining  </h1>
        <p className='sit'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <button className='exp'>Eplore Menu</button>

      </div>

      </div>
      <div className='piza'>
        <img src={piza} alt="" />
      </div>
      
      


    </>
   
  )
}

export default header
