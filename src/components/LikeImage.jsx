import React, { Component } from 'react'

class LikeImage extends Component{
  render(){
    const{count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>Like Image {count}</button>
      </div>
    )
  }
}

export default LikeImage