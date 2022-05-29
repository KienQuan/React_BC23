import React, { Component } from 'react'
// Cách 1: Import đường dẫn CSS -->ảnh hưởng toàn ứng dụng
// import './Style.css'
// Cách 2: import module css
import style from './Style.module.css';
//Cách 3: import css cho từng thẻ

export default class StyleComponent extends Component {
  render() {

    let status = false;
    let classStyle = status ? 'text-green' : 'text-red';
    
    return (
      <div>
          <h3>Style Component</h3>
          <p className='text-red'>Hello cybersoft</p>
          <p className={`p-5 ${style[classStyle]} bg-dark`}>Hello cybersoft</p>
          <p style = {{backgroundColor:'#000',color:'green',padding:'15px'}}>Hello bc23</p>
      </div>
    )
  }
}
