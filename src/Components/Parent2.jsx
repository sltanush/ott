const { Component , PureComponent } = require("react");


class Parent extends PureComponent
{
    constructor() // useState
    {
        super()
        this.state = { count1 : 10 }
    }
    render() // useEffect
    {
        console.log("componet rendered");
        return(<div>
            <h1>This is a class Component</h1>
            <h2>COUNT1: {this.state.count1}</h2>

            <button onClick={()=> this.setState({count1 : this.stat.count1+0}) }>  increase C1 </button>
        </div>)
    }
}
export default Parent;