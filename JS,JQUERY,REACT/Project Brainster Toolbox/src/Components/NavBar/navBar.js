import React from "react";
import "./navBar.css";
import "./navBarPhone.css";
import "./navBarTablet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { bubble as Menu } from "react-burger-menu";
import {Link,NavLink} from 'react-router-dom';

class NavBarComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    getNavBarStyle(style) {
        switch(style) {
            case "solid":
                return "bgNavSolid";
            case "transparent":
                return "bgNavSolidTransparent";
            default:
                return "bgNavSolid";
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }


    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render(){
        return(
            <div id = "outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    <div style = {{paddingTop:"25px"}}>
                        <Link to = "/">
                            <img src = {require("../../Imgs/logo.png")} className = "menuLogo" alt = ""/>
                        </Link>
                        <span className = "closeSpan" onClick = {() => this.toggleMenu()}><b>Затвори</b></span>
                    </div>
                    <div className = "menuDivs" style = {{marginTop:"100px"}}>
                        <NavLink to = "/SignUp" activeClassName="active" className = "navLinks"><span className = "menuSpans"><b>Регистрирај се</b></span></NavLink>
                    </div>
                    <div className = "menuDivs">
                        <NavLink to = "/SignIn" activeClassName="active" className = "navLinks"><span className = "menuSpans"><b>Најави се</b></span></NavLink>
                    </div>
                    <div className = "menuDivs">
                        <NavLink to = "/AboutUs" activeClassName="active" className = "navLinks"><span className = "menuSpans"><b>За нас</b></span></NavLink>
                    </div>
                    <div className = "menuDivs">
                        <NavLink to = "/Contact" activeClassName="active" className = "navLinks"><span className = "menuSpans"><b>Контакт</b></span></NavLink>
                    </div>
                    <div className = "menuDivs">
                        <a href = "//facebook.com/pg/brainster.co/photos" className = "navLinks">
                            <span className = "menuSpans"><b>Галерија</b></span>
                        </a>
                    </div>
                </Menu>
                <main id = "page-wrap">
                    <Container fluid className = {this.getNavBarStyle(this.props.navBarStyle)}>
                        <Row className = "rowMg0">
                            <Col md = {3} style = {{color:"rgb(255, 196, 0)"}}>
                                <div id = "outer-container" style = {{marginTop:"5px"}}>
                                    <span style = {{marginLeft:"50px"}}><b>Мени</b></span>
                                </div>
                            </Col>
                            <Col md = {{span:1, offset:2}} style = {{textAlign:"center"}}>
                                <Link to = "/"><img src = {require("../../Imgs/logo.png")} alt = "" className = "logo" onClick = {() =>{window.scrollTo(0,0)}}/></Link>
                            </Col>
                            <div className = "navBtns">
                                <a href = "//brainster.io/business" style = {{marginLeft:"30px"}}>
                                    <Button variant = "warning"><b>Обуки за компании</b></Button>
                                </a>
                                <a href = "//brainster.io/business">
                                    <Button variant = "dark" className = "btnBlack"><b>Обуки за компании</b></Button>
                                </a>
                            </div>
                        </Row>
                    </Container>
                </main>
            </div>
        );
    }

}

export default NavBarComp;