import React from "react";
import { Redirect } from 'react-router';
import "./cardsDetail.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faUniversity, faPaintRoller } from "@fortawesome/free-solid-svg-icons";

class CardsDetailComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardId: null,
            data: [],
            steps:[],
            errorOccurred: false
        }
    }

    componentDidMount(){
        axios("https://brainsterboxapi.herokuapp.com/games").then((res) => {
            this.setState({
                cardId: this.props.cardId,
                data: res.data[this.props.cardId -1],
                steps: res.data[this.props.cardId -1].steps,
            });
        }).catch(() => {
            this.setState({
                errorOccurred: true
            })
        });

    }

    myDescCheckFn (el) {
        if(el.stepDescription == null){
            return(
                el.text
            );
        } else {
            return(
                el.stepDescription
            );
        }
    }

    myStepCheckFn(el){
        if((el.stepDescription === "")){
            return(
                null
            );
        }else {
            return (
                el.step
            );
        }
    }

    myRowCheckFn (i){
        let id = this.state.cardId;

        if((id === "11" && i === 3)){
            return(
                "displayNone"
            );
        }else {
            return(
                "steps"
            );
        }
    }

    myScrollToFn() {
        window.scrollTo(0,0);
    }

    myTimeFrameCheckFn(el){
        if((el.timeFrame === "30-60 минути") || (el.timeFrame === "30-60 минути ")){
            return (
                "30 минути - 1 час"
            );
        } else if((el.timeFrame === "60-120 минути") || (el.timeFrame === "60-120 минути ")){
            return (
                "1-2 часа"
            );
        } else if (el.timeFrame === "120-240 минути"){
            return (
                "2-4 часа"
            );
        } else if (el.timeFrame === "60-240 минути") {
            return (
                "1-4 часа"
            );
        } else if (el.timeFrame === "30-120 минути") {
            return (
                "30 минути - 2 часа"
            );
        } else{
            return (
                el.timeFrame
            );
        }
        
    }
    
    hasErrorOccurred() {
        return this.state.errorOccurred;
    }

    render(){
        if(this.hasErrorOccurred()) {
            return <Redirect to="/404" />
        }

        return(
            <Container>
                {this.myScrollToFn()}
                <Row className = "rowMg0">
                    <Col md = {12} style = {{paddingLeft:"0"}}>
                        <h2 style = {{fontWeight:"999"}}>{this.state.data.title}</h2>
                    </Col>
                </Row>
                <Row className = "timeFrameDiv rowMg0">
                    <Col>
                        <FontAwesomeIcon icon= {faClock} className = "timeFrameDivIcons"/>
                        <span><b>Time Frame</b></span><br></br>
                        <span className = "timeFrameDivSpans">{this.myTimeFrameCheckFn(this.state.data)}</span>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon= {faUsers} className = "timeFrameDivIcons"/>
                        <span><b>Group Size</b></span><br></br>
                        <span className = "groupSizeSpan">{this.state.data.groupSize}</span>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon= {faUniversity} className = "timeFrameDivIcons"/>
                        <span><b>Facilitation Level</b></span><br></br>
                        <span className = "timeFrameDivSpans">{this.state.data.level}</span>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon= {faPaintRoller} className = "timeFrameDivIcons"/>
                        <span><b>Materials</b></span><br></br>
                        <div className = "timeFrameDivSpans">
                            <span>{this.state.data.materials}</span>
                        </div>
                    </Col>
                </Row>
                <Row className = "rowMg0">
                    <p>{this.state.data.description}</p>
                </Row>
                {this.state.steps.map((el,i) => {
                    return(
                    <Row key = {i} className = {`${this.myRowCheckFn(i)} rowMg0`}>
                        <span style = {{paddingBottom:"5px"}}><b>{this.myStepCheckFn(el)}</b></span>
                        <p>{this.myDescCheckFn(el)}</p>
                    </Row>
                    );
                })}
            </Container>
        );
    }

}

export default CardsDetailComp;