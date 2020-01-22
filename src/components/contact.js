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
      <div className="content">
        <div className="container">
          <div className="left">
            <h2> Jonathan Bui</h2>
            <img src={Profile}/>
            <p style={{ width: '50%', margin: 'auto', paddingTop: '1em', textAlign:'center'}}>
              I am a highly dedicated software developer. I am willing and able to learn many languages and skill to complete my
              goals. I hope to be a valuable asset for any of my employers.
            </p>
          </div>
          <div className="right">
            <h2>Contact Me</h2>
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
      </div>
    )
  }
}

export default Contact
