import React, {Component} from 'react';
import classes from './Jumbotron.module.css';
import JumbotronContent from '../../components/Jumbotron/JumbotonContent/JumbotronConent';
import ArrowButton from '../../components/Jumbotron/ArrowButton/ArrowButton'

class Jumbotron extends Component {
    state = {
        nodes: [{
            header: 'Software Developer Site',
            underHeader: 'never stay behind',
            shortDescription: 'At this site you can find content about Databases, JavaScript and Java technologies',
            active: true
        },
        {
            header: 'JAVA',
            underHeader: 'programming',
            shortDescription: 'java Core, SpringBoot',
            active: false
        },
        {
            header: 'Databases',
            underHeader: 'data storage',
            shortDescription: 'MySQL, MSSQL, MongDB',
            active: false
        }
        ]
    }

    swapJumbotronNode() {


        // console.log(nodesRetrieved);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: Date.now()})
            const nodesRetrieved = this.state.nodes.map(node => {return {...node}});
            let numberOfTrue = this.state.nodes.findIndex(ind => ind.active)
            nodesRetrieved[numberOfTrue].active = false;
            if(numberOfTrue < nodesRetrieved.length - 1) {
                nodesRetrieved[numberOfTrue + 1].active = true;
            } else {
                nodesRetrieved[0].active = true;
            }
            this.setState({nodes: nodesRetrieved})
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    leftArrowClickHandler = () => {
        const nodesRetrieved = this.state.nodes.map(node => {return {...node}});
        let indexOfActive = this.state.nodes.findIndex(index => index.active);
        nodesRetrieved[indexOfActive].active = false;
        if(indexOfActive <= nodesRetrieved.length - 1 && indexOfActive !== 0) {
            nodesRetrieved[indexOfActive -1].active = true;
        } else {
            nodesRetrieved[nodesRetrieved.length - 1].active = true;
        }
        this.setState({nodes: nodesRetrieved})
    }

    rightArrowClickHandler = () => {
        const nodesRetrieved = this.state.nodes.map(node => {return {...node}});
        let indexOfActive = this.state.nodes.findIndex(index => index.active);
        nodesRetrieved[indexOfActive].active = false;
        if(indexOfActive < nodesRetrieved.length - 1) {
            nodesRetrieved[indexOfActive + 1].active = true;
        } else {
            nodesRetrieved[0].active = true;
        }
        this.setState({nodes: nodesRetrieved})
    }

    // componentDidMount = function () {
    //     window.addEventListener('scroll', this.styling);
    // }
    // componentWillUnmoount = function () {
    //     window.onscroll = () => {
    //             window.removeEventListener('scroll', this.styling);
    //     }
    // }

    // styling = () => {
    //     let translating = "translateX(" + window.pageYOffset * -4 + "px)";
    //     document.getElementsByClassName(classes.JumbotronNode)[0].style.transform=translating;
    // }

    render() {

        let jumbotronNodes = this.state.nodes
                                            .filter(node => node.active)
                                            .map(node => (<JumbotronContent
                                                                    key={node.header}
                                                                    header={node.header} 
                                                                    underHeader={node.underHeader} 
                                                                    shortDescription={node.shortDescription}
                                                                    active={node.active}/>));
        let dots = [];
        for(let i = 0; i<this.state.nodes.length; i++) {
            let actived = this.state.nodes[i].active ? classes.ActiveDot : null; 
            dots.push(<div 
                        className={[classes.Dot, actived].join(' ')}
                        key={i}
                        ></div>)
        }
        return (
            <div className={classes.Jumbotron}>
                <div className={classes.JumbotronHeader}>
                    <div className={this.props.hidden ? [classes.JumbotronNode, classes.NodesHidden].join(' ') : classes.JumbotronNode}>
                        {jumbotronNodes}
                    </div>
                    <div className={this.props.hidden ? [classes.Dots, classes.DotsHidden].join(' ') : classes.Dots}>
                        <ArrowButton direction={"ArrowLeft"} clicked={this.leftArrowClickHandler}/>
                        {dots}
                        <ArrowButton direction={"ArrowRight"} clicked={this.rightArrowClickHandler}/>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Jumbotron;