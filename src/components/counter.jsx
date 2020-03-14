import React, { Component } from 'react';

class Counter  extends Component {
    state = {
        count : this.props.value,
       
    };

    

    setIncremente = () =>{
            this.setState( { count : this.state.count + 1});
    };

    setDecremente = ()=> {
                this.setState( { count : this.state.count - 1});
    }

    render() { 
        console.log(this.props)
        let classesBtn = this.methodClassBtn();
        return (<div>
              
                 <span className={this.methodClassBtn()}>{this.state.count}</span>
                 <button onClick = { this.setIncremente} className ="btn btn-sm btn-dark">Incremente</button>
                 <button onClick={ this.setDecremente} className = " btn btn-sm btn-light m-2">Decrementa</button>
               </div>
               );
    }

    methodClassBtn() {
        let classesBtn = "badge m-3 badge-";
        classesBtn += this.state.count === 0 ? "warning" : "primary";
        return classesBtn;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
  
 
export default Counter;
