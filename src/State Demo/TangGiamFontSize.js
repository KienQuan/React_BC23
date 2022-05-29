import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

    state = {
        fSizes: 15 //state fontsize là number
    }

    changeFontSize = (newFSizes) => {
        this.setState({
            fSizes: this.state.fSizes + newFSizes
        })
    }


  render() {
    return (
      <div className='container'>
          <h3>Bài tập tăng giảm font-size</h3>
          <p style={{fontSize:`${this.state.fSizes}px`}}>Học lập trình</p>
          <button className='btn btn-primary' onClick={() => {
              this.changeFontSize(5)
          }}>+</button>
          <button className='btn btn-primary ml-2 ' onClick={() => {
              this.changeFontSize(-5)
          }}>-</button>
      </div>
    )
  }
}
