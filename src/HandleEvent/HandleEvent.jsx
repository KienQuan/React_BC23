import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        alert('Hello hello')
    }

    sayHello = (name) => {
        alert('hello!!! ' + name)
    }

  render() {
    return (
      <div className='container'>
          <button onClick={this.showMess}>Click me!</button>
          <button onClick={() => { //Mot cach viet khac cua lenh button tren
              alert('Hello hello')
          }}>Click me</button>
          <hr />
          <button onClick={this.sayHello.bind(this,'Tung')}>Say hello</button>
          <button onClick={() => {
              this.sayHello('Khai');
              //goi nhieu ham hon nua
          }}>Say hello</button>
      </div>
    )
  }
}
