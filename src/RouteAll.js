import React from 'react'
import {Route, Switch,} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Contact from './pages/Contact';
const RouteAll = () => {
    return (<>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/resume" component={Resume} />
            <Route  path="/about" component={AboutMe} />
            <Route  path="/project" component={Project} />
            <Route  path="/contact" component={Contact} />
        </Switch>
    </>)
}

export default RouteAll;
