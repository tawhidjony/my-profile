import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
              <div className="project-grid">
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HTML/CSS Landing Page</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border className="card-action">
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                        <Button colored>Video</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HTML/CSS Landing Page</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border className="card-action">
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                        <Button colored>Video</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HTML/CSS Landing Page</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border className="card-action">
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                        <Button colored>Video</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
              </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>This is Html css 2</div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div>This is Html css 3</div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div>This is Html css 4</div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div>This is Html css 5</div>
            )
        }
    };

    render(){
        return (
                <div className="demo-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>  this.setState({ activeTab:tabId })} ripple>
                        <Tab>HTML/CSS</Tab>
                        <Tab>Bootstrap</Tab>
                        <Tab>React JS</Tab>
                        <Tab>Adonis JS</Tab>
                        <Tab>Laravel</Tab>
                    </Tabs>
                    <section>
                        <div className="project">
                            <Grid className="">
                                <Cell col={12}>
                                    <div className="content">  { this.toggleCategories() }</div>
                                </Cell>
                            </Grid>
                        </div>
                    </section>
                </div>    
        )
    }
}

export default Project;
