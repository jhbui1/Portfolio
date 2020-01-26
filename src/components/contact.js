import React, {Component} from 'react';
import './styles/contact.scss';
import Profile from './assets/profile.jpg';
import {List,ListItem,ListItemContent} from 'react-mdl';
import axios from 'axios';

class Contact extends Component {
  state = {
    show: false,
    name: '',
    company: '',
    email: '',
    inquiry:'',
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]:value
    })
  }
  showModal = (event) => {
    this.setState({show:true});
    event.stopPropagation();
  }

  hideModal = (event) => {
    this.setState({show:false});
    event.stopPropagation();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({show:false});

    const data = {
      Name:this.state.name,
      Email:this.state.email,
      Company:this.state.company,
      Inquiry:this.state.inquiry
    };


    console.log({data});
    console.log({
        "data": {"name": "Scott", "age": 25}
    })

    axios.post('https://sheetdb.io/api/v1/wqny5qzgwkl2d',{data})
      .then(res=>{
        console.log(res);
      });
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
            <Modal show={this.state.show} handleClose={this.hideModal}
              handleClick={this.showModal} handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}>
              <h3>Thank you for contacting me!</h3>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

const Modal = ({ handleClose, handleClick, show, handleSubmit, handleChange, children }) => {
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
              <input type="text" name="name" onChange={handleChange}
                placeholder="Name"/>
              <p>E-mail</p>
              <input type="text" name="email"  onChange={handleChange}
                placeholder="E-mail"/>
              <p>Company</p>
              <input type="text" name="company" onChange={handleChange}
                 placeholder="Company"/>
            </div>
          </div>
          <div className="inquiry-elements">
            <h4>Inquiry or Feedback:</h4>
            <textarea id="contact-txt-area" onChange={handleChange} name="inquiry"></textarea>
          </div>
        </div>
        <div className="form-btns">
          <button id="close" class="btn" onClick={handleClose}>
            Close
          </button>
          <button id="submit" class="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};


export default Contact
