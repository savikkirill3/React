import React, { Component } from 'react';
import Contact from '../common/Contact';
class Price extends Component {

    constructor(props){
      super(props);
      this.state = {value: 1};
      this.increase = this.increase.bind(this);
    }

    componentWillMount(){ // will launch before rendering
      console.log(`Will mount`);
    }

    componentDidMount(){ //will launch immediately after rendering
      console.log(`Did mount`);
      setTimeout(this.increase, 3000);
    }

    increase(){
      this.setState(prevState => ({value: ++prevState.value}));
    }

    render () {
      return <div>
          <h1>Price component with value: {this.state.value}</h1>
          <Contact />
      </div>
    }

}

export default Price;
