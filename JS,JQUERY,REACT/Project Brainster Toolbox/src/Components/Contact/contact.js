import React from "react";
import "./contact.css";
import NavBarComp from "../NavBar/navBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterComp from "../Footer/footer";

class ContactComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    myScrollToFn() {
        window.scrollTo(0,0);
    }
  

    render(){
        return(
            <div>
                {this.myScrollToFn()}
                <div className = "contactBgImg">
                    <div className = "contactUsBg">
                        <NavBarComp navBarStyle = "transparent" />
                        <Container fluid style = {{color:"white"}}>
                            <Row>
                                <Col className = "contactHeader">
                                    <h3 className = "h3AboutUs">Контакт</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Container className = "contactContainer">
                    <Row>
                        <Col>
                            <h3>Телефон</h3>
                            <p>+389 70 38 47 28 </p>
                        </Col>
                    </Row>
                    <Row style = {{marginTop:"30px"}}>
                        <Col>
                            <h3>Емаил</h3>
                            <p style = {{color:"#aaa"}}>contact@brainster.co</p>
                        </Col>
                    </Row>
                </Container>
                <div className = "contactBgImg1">
                    <div className = "contactUsBg">
                        <FooterComp footerBotStyle = "transparent" />
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactComp;