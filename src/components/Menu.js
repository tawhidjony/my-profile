import React from 'react'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import RouterAll from '../RouteAll';

/* Css */
import '../App.css'
const Menu = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="headerBg" title={<Link to="/">My Portfolio</Link>} scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/about">About me</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/about">About me</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content"/>
                    <RouterAll/>
                </Content>
            </Layout>
        </div>
    )
}

export default Menu
