import React,{Component} from "react";


class Updating extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    static getDerivedStateFromProps(){
        console.log(" getDerivedStateFromProps is called");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.log(this.state.count,nextState.count);
        if(this.state.count === nextState.count){
            return false;
        }else
        {return true;}
        
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate ");
    }
    componentDidUpdate(){
        console.log("componentDidupdte");
    }
   updateCount= () =>{
        this.setState({
            count:this.state.count +  1,
        });
    }
    render(){
        console.log("render");
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="lead"> Count:{this.state.count }</p>
                        <button onClick={this.updateCount}>Update Count</button>
                        </div>
                    </div>

            </div>
        )
    }
}
export default Updating;