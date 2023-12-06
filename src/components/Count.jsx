import React from 'react'


class Count extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState(prevstate=>{
            return{count: prevstate.count+1}
        }
        )
    }
render() {
    return (
    <div>
        {this.props.render(this.state.count, this.increment)}
    </div>
    )
}
}
export default Count