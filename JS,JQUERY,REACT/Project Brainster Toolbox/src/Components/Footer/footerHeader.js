import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footerHeader.css";
import "./footerHeaderPhone.css";
import "./footerHeaderTablet.css";

class FooterHeaderComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getFooterStyle (style) {
        switch(style) {
            case "homePage":
                return "footerHeader";
            case "singlePage":
                return "footerHeaderSingle";
            default:
                return "footerHeader";
        }
    }

    getFooterStyleMarg (style) {
        switch(style) {
            case "homePage":
                return "bgHeaderFooter";
            case "singlePage":
                return "bgHeaderFooterSingle";
            default:
                return "bgHeaderFooter";
        }
    }

  

    render(){
        return(
            <div className = {this.getFooterStyle(this.props.footerStyle)}>
                <div className = "footerHeaderBg"></div>
                <Container fluid className = {this.getFooterStyleMarg(this.props.footerStyle)}>
                <Row>
                    <Col>
                        <h2 className = "h2Header h2HeaderTablet" >FUTURE-PROOF YOUR ORGANIZATION</h2>
                        <Row>
                            <Col md = {{span:6, offset:3}} className = "pCol">   
                                <p className = "pPar">Find out how to unlock progress in your business.Understand your current state, identify opportunity areas and prepare to take charge of your organization's future.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style = {{padding:"30px 0px"}}>
                    <Col md = {{span:4, offset:4}}>
                        <a href = "//brainsterquiz.typeform.com/to/kC2I9E">
                            <Button variant = "warning"><b>Take the assessment</b></Button>
                        </a>
                    </Col>
                </Row>
                <Row style = {{display:"none"}} className = "navFooterPhone">
                    <Col>
                        <div style = {{display:"flex"}}>
                            <div className = "footerSpanPhone"><a href = "//linkedin.com/school/brainster-co/" className = "footerIconsPhone"><FontAwesomeIcon icon= {faLinkedinIn}/></a></div>
                            <div className = "footerSpansPhone"><a href = "//twitter.com/BrainsterCo"><FontAwesomeIcon icon= {faTwitter} className = "footerIconsPhone" /></a></div>                      
                            <div className = "footerSpansPhone"><a href = "//facebook.com/brainster.co"><FontAwesomeIcon icon= {faFacebookF} className = "footerIconsPhone" /></a></div>
                        </div>
                    </Col>
                </Row>
                <Row style = {{display:"none"}} className = "navFooterPhone">
                    <Col>
                        <div style = {{display:"flex"}}>
                            <div className = "footerSpansPhone firstDivPhone">
                                <NavLink to = "/AboutUs" activeClassName="active" className = "gallery"><b>About us</b></NavLink>
                            </div>
                            <div className = "footerSpansPhone">
                            <NavLink to = "/Contact" activeClassName="active" className = "gallery"><b>Contact</b></NavLink>
                            </div>
                            <div className = "footerSpansPhone">
                                <a href = "//facebook.com/pg/brainster.co/photos/" className = "gallery">
                                    <b>Gallery</b>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Row className = "bottomLogoPhone">
                        <Col>
                            <img src = {require("../../Imgs/logo.png")} alt = "" className = "footerLogo" onClick = {() =>{window.scrollTo(0,0)}}/>
                        </Col>
                    </Row>
                </Row>
            </Container>
            </div>
        );
    }

}

export default FooterHeaderComp;