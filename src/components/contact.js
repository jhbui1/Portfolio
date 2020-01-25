import React, {Component} from 'react';
import './styles/contact.scss';
import Profile from './assets/profile.jpg';
import {List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
  state = {show: false}
  showModal = (event) => {
    this.setState({show:true});
    event.stopPropagation();
  }
  hideModal = (event) => {
    this.setState({show:false});
    event.stopPropagation();
  }
  render(){
    return(
      <div className="contact-content">

        <div className="contact-container">
          <div className="left">
            <h2> Jonathan Bui</h2>
            <img src={Profile} alt="profile.png"/>
            <p style={{ width: '50%', margin: 'auto', paddingTop: '1em', textAlign:'center'}}>
              I am an aspiring and highly dedicated software developer with full-stack experience. I am willing and able to learn many languages and skill to complete my
              goals. I hope to be a valuable asset for any of my colleagues.
            </p>
          </div>
          <div className="right">
            <h2>Contact Me</h2>
            <hr/>
            <List className="contact-list">
              <ListItem>
                <ListItemContent style={{fontFamily:"Arial"}}>
                  <div>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:email@jonathan-bui.com">email@jonathan-bui.com</a>
                  </div>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  Huntington Beach, CA
                </ListItemContent>
              </ListItem>
            </List>
            <button id="showContactForm" onClick={this.showModal}>
              Inquiry or Feedback?
            </button>
            <Modal show={this.state.show} handleClose={this.hideModal} handleClick={this.showModal}>
              <h3>Thank you for contacting me!</h3>

            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

const Modal = ({ handleClose, handleClick, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className='modal-main' onClick={handleClick}>
        {children}
        <div className="form-container">
          <div className="responder-info">
            <h4>Return information (optional)</h4>
            <div className="responder-fill-ins">
              <p>Name</p>
              <input placeholder="Name"/>
              <p>E-mail</p>
              <input placeholder="E-mail"/>
              <p>Company</p>
              <input placeholder="Company"/>
            </div>
          </div>
          <div className="inquiry-elements">
            <h4>Inquiry or Feedback:</h4>
            <textarea id="contact-txt-area"></textarea>
          </div>
        </div>
        <button  id="close-btn" onClick={handleClose}>
          Close
        </button>

      </div>
    </div>
  );
};


export default Contact
