import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import NavBarComp from "../NavBar/navBar";
import FooterComp from "../Footer/footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signIn.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class SignInComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className = "signInBgImg">
                    <div className = "signInBg">
                        <NavBarComp navBarStyle = "transparent"/>
                        <Container className = "signInContainer">
                            <Col md = {{span:4, offset:4}} className = "signInForm">
                                <Col className = "signInDivLogo">
                                    <div className = "signInUserDiv">
                                        <FontAwesomeIcon icon= {faUser} className = "signInUser"/>
                                    </div>
                                </Col>
                                <Form>
                                    <Form.Group>
                                        <Form.Label><b>E-mail Address</b></Form.Label>
                                        <Form.Control type="email" placeholder="Enter E-mail" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label><b>Password</b></Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                        
                                    <Col style = {{textAlign:"center"}}>
                                        <Button variant="success">
                                            Sign In
                                        </Button>
                                    </Col>
                                </Form>
                            </Col>
                        </Container>
                        <FooterComp footerBotStyle = "transparent"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignInComp;