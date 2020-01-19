import React, {Component} from 'react';
import './styles/contact.scss';
import Profile from './assets/profile.jpg'

class Contact extends Component {
  constructor(props) {
    super(props)
  }
  showModal() {

  }
  render(){
    return(
      <div className="container">
        <div className="left">
          <img src={Profile}/>

        </div>
        <div className="right">
            <p id="email">
              email@jonathan-bui.com
            </p>
            <p id="location">
                Huntington Beach
                <br/>
                CA,92647
            </p>
            <button id="showContactForm" onClick={this.showModal}>
              Inquiry or Feedback?
            </button>
        </div>
      </div>
    )
  }
}

export default Contact
