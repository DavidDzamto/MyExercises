import React from "react";
import axios from "axios";
import "./cards.css";
import "./cardsPhone.css";
import "./cardsTablet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import windowSize from 'react-window-size';

class CardsComp extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }


    componentDidMount(){
        axios("https://brainsterboxapi.herokuapp.com/games").then((res) => {
            this.setState({
                data: res.data,
            });
            
        });

    }

    myScrollToFn() {
        window.scrollTo(0,0);
    }


    myTitleCheckFn(el,i) {
        if(i === 3){
            return(
                "Иновации"
            );
        }
        else{
            return(
                el.category.charAt(0).toUpperCase() + el.category.slice(1)
            );
        }
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

    getMdSize = () => {
        if(this.props.windowWidth >= 426 && this.props.windowWidth <= 768) {
            return 6;
        } else {
            return 4;
        }
    }

    render(){
        return(
            <Container className = "cardsContainer">
                {this.myScrollToFn()}
                
                <Row className = "rowMg0">
                    {this.state.data.map((el,i) => {
                        return(
                            <Col md = {this.getMdSize()} key = {el.id} style = {{marginBottom:"30px"}}>
                                <Link to = {`/CardDetail/${i+1}`} style = {{textDecoration:"none"}}>
                                    <div className = "cards">
                                        <div style = {{height:"60%"}} className = "cardsImgs">
                                            <Image src = {require(`../../Imgs/${i}.jpg`)} className = "bigCardImg" alt = "" />
                                        </div>
                                        <div className = "cardSpec" style = {{display:"flex"}}>
                                            <div style = {{display:"flex",flexDirection:"column",width:"360px"}}>
                                                <span><b>{el.title}</b></span>
                                                <span>Категорија: <b style = {{color:"rgba(36, 145, 173)"}}>{this.myTitleCheckFn(el,i)}</b></span>
                                                <div style = {{marginTop:"20px"}}>
                                                    <FontAwesomeIcon icon= {faClock} />
                                                    <b style = {{marginLeft:"5px"}}>Времетраење</b>
                                                </div>
                                                <span style = {{fontSize:"12px",marginLeft:"22px"}}>{this.myTimeFrameCheckFn(el)}</span>
                                            </div>
                                            <div style = {{height:"50px",width:"auto"}}>
                                                <Image src = {el.image} alt = "" roundedCircle className = "cardImg" align="right"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }

}

export default windowSize(CardsComp);