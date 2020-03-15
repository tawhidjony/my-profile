import React from 'react'
import {Grid, Cell} from 'react-mdl';
import Typical from 'react-typical';
import tawhid from '../assets/tawhid.jpg'
/* Icon */
import { FaGithubSquare, FaLinkedin, FaGitlab } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";
function Home() {
    return (
            <div className="homeBg" style={{width: '100%',  height: "100%", margin: 'auto'}}>
                <Grid className="demo-grid-ruler ">
                    <Cell col={12}>
                       <div className="banner-area">
                            <img src={tawhid}
                                alt="Avatar"
                                className="avatar-logo"
                            />
                       </div>
                       <div className="banner-text">
                           
                            <h3>Hi, I am <Typical
                                steps={['MD TAWHIDUR RAHMAN', 2000, 'Full Stack Web Developer', 500]}
                                loop={Infinity}
                                wrapper="h3"
                            /></h3>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | jQuery | Laravel | Node JS | Adonis JS | MySql | PostgreSQL</p>
                            <div className="social-link">
                            <a href="https://github.com/tawhidjony"  target="_blank">
                               <FaGithubSquare 
                                    size="3rem"
                                    value={{classNames:'Font-style'}}
                               />
                            </a>
                            <a href="https://gitlab.com/tawhidjony" rel="noopener norefferre" target="_blank">
                               <FaGitlab 
                                    size="3rem"
                                    value={{classNames:'Font-style'}}
                               />
                            </a>
                            <a href="https://bitbucket.org/tawhidjony2/" rel="noopener norefferre" target="_blank">
                               <DiBitbucket 
                                    size="3rem"
                                    value={{classNames:'Font-style'}}
                               />
                            </a>
                            <a href="https://www.linkedin.com/in/tawhidjony/" rel="noopener norefferre" target="_blank">
                                <FaLinkedin 
                                    size="3rem"
                                    value={{classNames:'Font-style'}}
                                />
                            </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
           </div>)
}

export default Home;
