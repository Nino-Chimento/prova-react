import React, { Component } from 'react';

class Counter  extends Component {
    state = {
        count : 0,
       
    }

    render() { 
        let classesBtn = "badge m-3 badge-";
        classesBtn += this.state.count === 0 ?"warning" : "primary";
        return (<React.Fragment>
              
                 <span className={classesBtn}>{this.formatCount()}</span>
                 <button className ="btn btn-sm btn-dark">Incremente</button>
               </React.Fragment>
               );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
  
 
export default Counter;
