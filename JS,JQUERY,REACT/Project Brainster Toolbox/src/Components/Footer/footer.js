import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import "./footerPhone.css";
import "./footerTablet.css";

class FooterComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    getFooterStyle(style) {
        switch(style) {
            case "solid":
                return "footerBgSolid";
            case "transparent":
                return "footerBgTrans";
            default:
                return "footerBgSolid";
        }
    }
  

    render(){
        return(
            <Container fluid className = {this.getFooterStyle(this.props.footerBotStyle)}>
                <Row>
                    <Col md = {4}>
                        <div style = {{display:"flex"}}>
                            <div className = "footerSpans fSLinks aULink">
                                <NavLink to = "/AboutUs" activeClassName="active" className = "gallery"><b>About us</b></NavLink>
                            </div>
                            <div className = "footerSpans fSLinks">
                            <NavLink to = "/Contact" activeClassName="active" className = "gallery"><b>Contact</b></NavLink>
                            </div>
                            <div className = "footerSpans fSLinks">
                                <a href = "//facebook.com/pg/brainster.co/photos/" className = "gallery">
                                    <b>Gallery</b>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md = {{span:3, offset:1}}>
                        <img src = {require("../../Imgs/logo.png")} alt = "" className = "footerLogo footerLogoTrans" onClick = {() =>{window.scrollTo(0,0)}}/>
                    </Col>
                    <Col md = {{span:3,offset:1}}>
                        <div style = {{display:"flex"}} className = "allIcons">
                            <div className = "footerSpan"><a href = "//linkedin.com/school/brainster-co/" className = "footerIcons"><FontAwesomeIcon icon= {faLinkedinIn}/></a></div>
                            <div className = "footerSpans linkIcons"><a href = "//twitter.com/BrainsterCo"><FontAwesomeIcon icon= {faTwitter} className = "footerIcons" /></a></div>                      
                            <div className = "footerSpans linkIcons"><a href = "//facebook.com/brainster.co"><FontAwesomeIcon icon= {faFacebookF} className = "footerIcons" /></a></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default FooterComp;