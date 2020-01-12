import React from 'react';
import './App.css';
import {Navigation, Drawer, Layout, Content, Header} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header className = "header-gradient" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className = "page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
