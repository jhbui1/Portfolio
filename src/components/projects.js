import React, {Component} from 'react';
import {Tab,Tabs,Grid,Cell} from 'react-mdl';
import './styles/projects.scss'
import ReactMarkdown from 'react-markdown';
import ReadMe from './assets/README.md';
import ZOReadMe from './assets/ZOTOUTREADME.md';
import PeekPeekMainDemo from './assets/images/PeekPeekDemo.gif';

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 0, markdown: null,zomarkdown:null };


    //Anchor references for tables of contents
    //used wtih scrollintoview, css smooth scroll is not as widley available
    this.top = React.createRef();
    this.zotop = React.createRef();

    this.PeekPeekSumRef = React.createRef();
    this.PeekPeekReadmeRef = React.createRef();
    this.PeekPeekSCRef = React.createRef();
    this.PeekPeekDemoRef = React.createRef();

    this.ZotOutSumRef = React.createRef();
    this.ZotOutReadmeRef = React.createRef();
    this.ZotOutSCRef = React.createRef();
    this.ZotOutDemoRef = React.createRef();
   }

  componentDidMount() {
     fetch(ReadMe).then((response) => response.text()).then((text) =>
       {this.setState({markdown:text})})
     fetch(ZOReadMe).then((response) => response.text()).then((text) =>
       {this.setState({zomarkdown:text})})

   }

  smoothScrollStart = (ref) =>{
    ref.current.scrollIntoView({
      behavior:"smooth",
      block:"center"
    })
  }

  scrollToTop =(event) =>{
    if(event.target.id === "peekpeek") {
      this.smoothScrollStart(this.top);
    }else{
      this.smoothScrollStart(this.zotop);
    }
  }

  handleOnClick = (event) => {
     event.persist();
     if(event.target.id){
      if(event.target.id ==="ppsum"){
          this.smoothScrollStart(this.PeekPeekSumRef);
      }else if(event.target.id ==="pprm"){
        this.smoothScrollStart(this.PeekPeekReadmeRef);
      }else if(event.target.id ==="ppsc"){
        this.smoothScrollStart(this.PeekPeekSCRef);

      }else if(event.target.id ==="ppdem"){
        this.smoothScrollStart(this.PeekPeekDemoRef);
      }else if(event.target.id ==="zosum"){
        this.smoothScrollStart(this.ZotOutSumRef);
      }else if(event.target.id ==="zorm"){
        this.smoothScrollStart(this.ZotOutReadmeRef);
      }else if(event.target.id ==="zosc"){
        this.smoothScrollStart(this.ZotOutSCRef);
      }else if(event.target.id ==="zodem"){
        this.smoothScrollStart(this.ZotOutDemoRef);
      }
    }
  }

  toggleCategories(){
     if(this.state.activeTab===0){
       return(
         <div className="category">
           <div className="toc-wrapper">
             <div ref={this.top} className="toc">
               <h2 id="ppsum" onClick={this.handleOnClick}>1. Summary and Responsibilities</h2>
               <h2 id="pprm" onClick={this.handleOnClick}>2. Read Me</h2>
               <h2 id="ppsc" onClick={this.handleOnClick}>3. Source Code and Site Links</h2>
               <h2 id="ppdem" onClick={this.handleOnClick}>4. Demo</h2>
               <hr/>
             </div>
           </div>
            <h2 className="bodyHeader" ref={this.PeekPeekSumRef}>Summary and Responsibilities</h2>
            <p>
              This project was completed for a senior project course, (Informatics 117, Project in Software System Design) in a team with 4 other members.
              Our sponsor was a co-founder of PeekPeek, a company which creates virtual tours. His goal was to gather feedback on his current website and
              complete the implementation of a redesigned website which began in the previous term under a different team. Additionally, the site required
              responsive behavior, numerous animations, and parallax effects.
              <br/><br/>
              My contribution to the team/project included writing markup and styling for homepage content and implementing a contact page. The contact page
              contains three separate pages and sends JSON data to a google sheet through Axios/SheetDB.
              On the non technical side, I helped my team conduct and analyse surveys on the redesign, present and compose sprint reports and helped monitor project
              status on Trello.
            </p>
            <h2  className="bodyHeader" ref={this.PeekPeekReadmeRef}>Read Me</h2>
              <div className="readme">
                <ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
              </div>
            <h2  className="bodyHeader" ref={this.PeekPeekSCRef}>Source Code</h2>
              <a id="peekpeek-link" href='https://peekpeek.com' target="_blank" className='download-button'>
              Site Link
              </a>
              <a href='https://github.com/kencue/PeekPeekProject.git' target="_blank" class='download-button'>
              Repository
              </a>
              <a href='https://github.com/kencue/PeekPeekProject/archive/master.zip'  class='download-button'>
              Download
              <span>Latest version from GitHub</span>
              </a>

            <h2  className="bodyHeader" ref={this.PeekPeekDemoRef}>Demo</h2>
            <img src={PeekPeekMainDemo}/>
                <button id="peekpeek" class="scroll-to-top" onClick={this.scrollToTop}>Scroll to Top</button>
         </div>
       )
     }else if(this.state.activeTab===1){
       return(
       <div className="category">
         <div className="toc-wrapper">
           <div ref={this.zotop} className="toc">
             <h2 id="zosum" onClick={this.handleOnClick}>1. Summary/Responsibilities</h2>
             <h2 id="zorm" onClick={this.handleOnClick}>2. Read Me</h2>
             <h2 id="zosc" onClick={this.handleOnClick}>3. Source Code</h2>
             <h2 id="zodem" onClick={this.handleOnClick}>4. Demo</h2>
             <hr/>
           </div>
         </div>
          <h2 id="zosum" className="bodyHeader" ref={this.ZotOutSumRef}>Summary/Responsibilities</h2>
          <p>
              I created ZotOut to reinforce my MySQL/C++ experience. Additionally, I wanted to understand basically and implement
              abstractaction of database queries.
              <br/><br/>
              ZotOut is a simple gym management terminal application. It would be used from the perspective of gym managers and employees.
              The application keeps track of and displays simple employee and member data such as salary, contact info, renewal date etc.
              It provides basic functionality including accurately checking members in and maintaining metrics such as most valuable employee/member.
              The program also provides simple security in the form of password salting and hashing and access control.
          </p>
          <h2 className="bodyHeader" ref={this.ZotOutReadmeRef}>Read Me</h2>
            <div className="readme">
              <ReactMarkdown escapeHtml={false} source={this.state.zomarkdown}/>
            </div>
          <section id ="zosc">
            <h2 className="bodyHeader" ref={this.ZotOutSCRef}>Source Code</h2>
              <a href='https://github.com/jhbui1/ZotOut' target="_blank" class='download-button'>
              Repository
              </a>
              <a href='https://github.com/jhbui1/ZotOut/archive/master.zip'  class='download-button'>
              Download
              <span>Latest version from GitHub</span>
              </a>
          </section>
          <h2 className="bodyHeader" ref={this.ZotOutDemoRef}>Demo</h2>
          <button id="zotout" class="scroll-to-top" onClick={this.scrollToTop}>Scroll to Top</button>
       </div>
      )
     }
  }
  render(){
    return(
      <div className="demo-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Peek Peek(VueJS)</Tab>
            <Tab>ZotOut(MySQL/C++)</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
              <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
