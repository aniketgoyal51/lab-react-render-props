import React, { Component } from 'react'

class LikePost extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>Like Post {count}</button>
      </div>
    )
  }
}

export default LikePost