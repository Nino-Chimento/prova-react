import React, { Component } from 'react';

class Counter  extends Component {
    state = {
        count : 0,
       
    };

    

    setIncremente = () =>{
            this.setState( { count : this.state.count + 1});
    };

    setDecremente = ()=> {
                this.setState( { count : this.state.count - 1});
    }

    render() { 
        let classesBtn = this.methodClassBtn();
        return (<React.Fragment>
              
                 <span className={this.methodClassBtn()}>{this.state.count}</span>
                 <button onClick = { this.setIncremente} className ="btn btn-sm btn-dark">Incremente</button>
                 <button onClick={ this.setDecremente} className = " btn btn-sm btn-light m-2">Decrementa</button>
               </React.Fragment>
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
