import React from "react";
import "./header.css";
import "./headerPhone.css";
import "./headerTablet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class HeaderComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

  

    render(){
        return(
            <div className = "header">
                <div className="headerBg"></div>
                <Container fluid className = "bgHeader">
                <Row className = "brainAndH2">
                    <Col>
                        <span>Изработено од студентите за програмирање на <a href = "//brainster.co" className = "brainsterATagHeader">Brainster</a></span>
                    </Col>
                </Row>
                <Row className = "brainAndH2">
                    <Col className = "headerBtns">
                        <a href = "//brainster.io/business" className = "headerBtnsA">
                            <Button variant = "warning"><b>Обуки за компании</b></Button>
                        </a>
                        <a href = "//brainster.io/business">
                            <Button variant = "dark" className = "btnBlack"><b>Обуки за компании</b></Button>
                        </a>
                    </Col>
                </Row>
                <Row className = "h2AndpHeader brainAndH2">
                    <Col>
                        <h2 className = "h2Header" >FUTURE-PROOF YOUR ORGANIZATION</h2>
                        <Row className = "rowMg0">
                            <Col md = {{span:6, offset:3}} className = "pCol">   
                                <p className = "pPar">Find out how to unlock progress in your business.Understand your current state, identify opportunity areas and prepare to take charge of your organization's future.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style = {{padding:"30px 0px"}} className = "assessRow rowMg0">
                    <Col md = {{span:4, offset:4}}>
                        <a href = "//brainsterquiz.typeform.com/to/kC2I9E">
                            <Button variant = "warning"><b>Take the assessment</b></Button>
                        </a>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }

}

export default HeaderComp;