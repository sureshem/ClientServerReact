import React, { Component } from 'react'
import Popup from '../common/popup';
class page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpop:false
    };
  }
  fixModal() {
    let body = typeof document.body !== 'undefined' ? document.body : false;
    if (body) {
      if (this.props.isOpen) {
        body.classList.add('magz-modal');
      } else {
        body.classList.remove('magz-modal');
      }
    }
  }
  UNSAFE_componentWillMount() {
    this.fixModal();

    if (!this.props.isOpen) {
      return '';
    }
  }
  PopClose() {
    this.setState({showpop: false});
  }
  PopOpen() {
    this.setState({showpop: true});
  }
  render() {
    let popcontent = (

      <section>
          <section className="innerThumb">asdf</section>
      </section>
    );
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p onClick={this.PopOpen.bind(this)} className="video-play-button"><span></span></p>
        <Popup isOpen={this.state.showpop} onClose={() => this.PopClose()} >{popcontent}</Popup>
          <p>page2</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
export default page2