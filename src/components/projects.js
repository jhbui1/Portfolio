import React, {Component} from 'react';
import {Tab,Tabs,Grid,Cell} from 'react-mdl';
import './styles/projects.scss'
import ReactMarkdown from 'react-markdown';
import ReadMe from './assets/README.md';

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 0, markdown: null };

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

   }
   handleOnClick = (event) => {
     event.persist();
     if(event.target.id){
       if(event.target.id ==="ppsum"){
          this.PeekPeekSumRef.current.scrollIntoView({
             behavior: "smooth",
             block: "start"
          })
      }else if(event.target.id ==="pprm"){
          this.PeekPeekReadmeRef.current.scrollIntoView({
             behavior: "smooth",
             block: "start"
          })
      }else if(event.target.id ==="ppsc"){
        this.PeekPeekSCRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }else if(event.target.id ==="ppdem"){
        this.PeekPeekDemoRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start"
        })
      }else if(event.target.id ==="zosum"){
        this.ZotOutReadmeRef.current.scrollIntoView({
           behavior: "smooth",
           block: "start"
        })
      }else if(event.target.id ==="zorm"){
        this.ZotOutSCRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }else if(event.target.id ==="zosc"){
        this.ZotOutDemoRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start"
        })
      }else if(event.target.id ==="zodem"){
        this.ZotOutDemoRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start"
        })
      }
    }
  }
   toggleCategories(){

     if(this.state.activeTab===0){
       return(
         <div className="category">
           <div className="toc-wrapper">
             <div className="toc">
               <h2 id="ppsum" onClick={this.handleOnClick}>1. Summary and Responsibilities</h2>
               <h2 id="pprm" onClick={this.handleOnClick}>2. Read Me</h2>
               <h2 id="ppsc" onClick={this.handleOnClick}>3. Source Code</h2>
               <h2 id="ppdem" onClick={this.handleOnClick}>4. Demo</h2>
               <hr/>
             </div>
           </div>

            <h2  className="bodyHeader" ref={this.PeekPeekSumRef}>Summary and Responsibilities</h2>
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
                  <ReactMarkdown source={this.state.markdown}/>
                </div>
            <h2  className="bodyHeader" ref={this.PeekPeekSCRef}>Source Code</h2>
              <p>
                What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </p>
            <h2  className="bodyHeader" ref={this.PeekPeekDemoRef}>Demo</h2>
              <p>
                What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </p>
                <button id="scroll-to-top">Scroll to Top</button>
         </div>
       )
     }else if(this.state.activeTab===1){
       return(
       <div className="category">
         <div className="toc-wrapper">
           <div className="toc">
             <h2 id="zosum" onClick={this.handleOnClick}>1. Summary/Responsibilities</h2>
             <h2 id="zorm" onClick={this.handleOnClick}>2. Read Me</h2>
             <h2 id="zosc" onClick={this.handleOnClick}>3. Source Code</h2>
             <h2 id="zodem" onClick={this.handleOnClick}>4. Demo</h2>
             <hr/>
           </div>
         </div>
          <h2 className="bodyHeader" ref={this.ZotOutSumRef}>Summary/Responsibilities</h2>
          <h2 className="bodyHeader" ref={this.ZotOutReadmeRef}>Read Me</h2>
          <h2 className="bodyHeader" ref={this.ZotOutSCRef}>Source Code</h2>
          <h2 className="bodyHeader" ref={this.ZotOutDemoRef}>Demo</h2>
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
              <div className="content">{this.toggleCategories()}

              </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Projects;
