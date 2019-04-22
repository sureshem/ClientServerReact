import React, { Component } from 'react'

class scrolltop extends Component {
   constructor(){
       super();
       this.state = {
           intervalId:0
       }
   }
   onScrollStep(){
       if(window.pageYOffset === 0){
           clearInterval(this.state.intervalId)
       }
       window.scroll(0,window.pageYOffset - this.props.onScrollStepInPx)
   }
   onScrollStepTop(){
       let intervalId = setInterval(this.onScrollStep.bind(this), this.props.delayInMs)
       this.setState({intervalId:intervalId})
   }
  render() {
    return (
      <div className="scrollTp">
        <p onClick={this.onScrollStepTop.bind(this)}>Top</p>
      </div>
    )
  }
}
export default scrolltop