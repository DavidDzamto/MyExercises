import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import NavBarComp from "../NavBar/navBar";
import FooterComp from "../Footer/footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signUp.css";

class SignUpComp extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            phoneNum: "",
            numOfEmployees: "1",
            sector: "Human Resources",
            message: "",
            password: ""
        }
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value  = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = () => {
        var validator = require("email-validator");

        if((this.state.firstName === "") || (this.state.lastName === "") || (!(validator.validate(this.state.email))) || (this.state.companyName === "") || (this.state.phoneNum === "") || (this.state.message === "") || (this.state.password === "")){
            return;
        } else{
            let arr = [];
            arr.push(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                companyName: "",
                phoneNum: "",
                numOfEmployees: "1",
                sector: "Human Resources",
                message: "",
                password: ""
            })
            console.log(arr);
            alert("Thank you! Your form has been successfully submitted!");
        }
    }
  

    render(){
        return(
            <div>
                <div className = "signUpBgImg">
                    <div className = "signUpBg">
                        <NavBarComp navBarStyle = "transparent"/>
                        <Container className = "signUpContainer">
                            <Form className = "rowMg" onSubmit={e => {e.preventDefault()}}>
                                <Form.Row className = "rowMg formRowFlex" style = {{marginTop:"20px"}}>
                                    <Form.Group as={Col}>
                                        <Form.Label><b>First Name</b></Form.Label>
                                        <Form.Control name = "firstName" type="text" placeholder="Enter First Name" onChange = {this.handleInput} value = {this.state.firstName} required/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label><b>Last Name</b></Form.Label>
                                        <Form.Control name = "lastName" type="text" placeholder="Enter Last Name" onChange = {this.handleInput} value = {this.state.lastName} required/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label><b>E-mail</b></Form.Label>
                                        <Form.Control name = "email" type="email" placeholder="Enter E-mail" onChange = {this.handleInput} value = {this.state.email} required/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row className = "rowMg formRowFlex">
                                    <Form.Group as={Col}>
                                        <Form.Label><b>Password</b></Form.Label>
                                        <Form.Control name = "password" type="password" placeholder="Enter Password" onChange = {this.handleInput} value = {this.state.password} required/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label><b>Company Name</b></Form.Label>
                                        <Form.Control name = "companyName" type="text" placeholder="Enter Company Name" onChange = {this.handleInput} value = {this.state.companyName} required/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label><b>Phone Number</b></Form.Label>
                                        <Form.Control name = "phoneNum" type="number" min="0" placeholder="Enter Phone Number" onChange = {this.handleInput} value = {this.state.phoneNum} required/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row className = "rowMg formRowFlex" >
                                    <Form.Group as={Col}>
                                        <Form.Label><b>Number of Employees</b></Form.Label>
                                        <Form.Control name = "numOfEmployees" as="select" onChange = {this.handleInput} value = {this.state.numOfEmployees}>
                                            <option>1</option>
                                            <option>2-10</option>
                                            <option>11-50</option>
                                            <option>51-200</option>
                                            <option>200+</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label><b>Sector</b></Form.Label>
                                        <Form.Control name = "sector" as="select" onChange = {this.handleInput} value = {this.state.sector}>
                                            <option>Human Resources</option>
                                            <option>Marketing</option>
                                            <option>Product</option>
                                            <option>Selling</option>
                                            <option>CEO</option>
                                            <option>Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Label><b>Message</b></Form.Label>
                                    <Form.Control name = "message" as="textarea" rows="4" placeholder="Enter Message" onChange = {this.handleInput} value = {this.state.message} required/>
                                </Form.Group>

                                <Button type = "submit" variant="primary" style = {{marginBottom:"32px"}} onClick = {this.handleSubmit}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Container>
                        <FooterComp footerBotStyle = "transparent" />
                    </div>
                </div>
            </div>
        );
    }

}

export default SignUpComp;