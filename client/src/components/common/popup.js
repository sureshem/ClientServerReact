import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.fixModal = this.fixModal.bind(this);
  }

  fixModal() {
    let body = typeof document.body !== 'undefined' ? document.body : false;
    if (body) {
      if (this.props.isOpen) {
        body.classList.add('magz-modal');
      }else {
        body.classList.remove('magz-modal');
      }
    }
  }


  render() {
    this.fixModal();

    if (!this.props.isOpen) {
      return '';
    }

    return (
      <section className="mainpopup">
        <section className="overly" onClick={this.props.onClose} />
        <section className="popupInner">
          <section className="innerElements">
            <span className="clos" onClick={this.props.onClose} />
            {this.props.children}
          </section>
        </section>
      </section>
    );
  }
}

Popup.defaultProps = {
  isOpen: false
};

export default Popup;
