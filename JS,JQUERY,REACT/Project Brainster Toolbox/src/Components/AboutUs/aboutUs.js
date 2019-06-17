import React from "react";
import NavBarComp from "../NavBar/navBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./aboutUs.css";
import FooterComp from "../Footer/footer";

class AboutUsComp extends React.Component{
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
                <div className = "aboutUsBgImg">
                    <div className = "aboutUsBg">
                        <NavBarComp navBarStyle = "transparent"/>
                        <Container fluid style = {{color:"white",textAlign:"center"}}>
                            <Row>
                                <Col className = "aboutUsHeader">
                                    <h3 className = "h3AboutUs">Учи, сподели, вмрежи се!</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Container className = "aboutUsContainer">
                    <Row>
                        <Col>
                            <h3>Ајде заедно да го промениме начинот на кој учиме!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Ние веруваме дека секој поседува практични вештини да предава како и постојана потреба да стекнува нови знаења.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Затоа гo создадовме Brainster.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Brainster е платформа за офлајн курсеви каде ќе можете да предавате и да посетувате курсеви на најразлични теми - од курсеви за изработка на мобилни апликации, до курсеви за улична фотографија.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Нашата визија е да го претвориме целиот град во универзитет, секој простор во училница и секој од нас во инструктор и студент.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Brainster Ви овозможува активно да учествувате во градењето на локалната 2.0 заедница, да се вмрежите со луѓе со слични интереси, да креирате, да го споделувате Вашето знаење и да учите од другите.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Нашата прва станица е Скопје. Очекувајте нѐ во октомври на различни кул локации како co-working простории, работилници, акселератори, па дури и во кафулиња.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Контакт</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style = {{color:"#aaa",marginBottom:"70px"}}>contact@brainster.co</p>
                        </Col>
                    </Row>
                </Container>
                <div className = "aboutUsBgImg">
                    <div className = "aboutUsBg">
                        <FooterComp footerBotStyle = "transparent" />
                    </div>
                </div>
            </div>
        );
    }

}

export default AboutUsComp;