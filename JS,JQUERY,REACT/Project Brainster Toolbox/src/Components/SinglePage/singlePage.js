import React from "react";
import NavBarComp from "../NavBar/navBar";
import CardsDetailComp from "../Cards/cardsDetail";
import FooterHeaderComp from "../Footer/footerHeader";
import FooterComp from "../Footer/footer";
import Button from "react-bootstrap/Button";
import "./singlePage.css";

class SinglePageComp extends React.Component{
    constructor(){
        super();
        this.state = {
            id: null
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.match.params.id
        })
    }
  

    render(){
        return(
            <div className = "singleParentDiv">
                <div className = "singlePageImgDiv">
                    <NavBarComp navBarStyle = "transparent"/>
                    <img src = {require("../../Imgs/office.jpeg")} className = "bgImageSingle" alt = ""/>
                    <div className = "singleGrBtns" style = {{display:"none"}}>
                        <a href = "//brainster.io/business" style = {{marginLeft:"30px"}}>
                            <Button variant = "warning"><b>Обуки за компании</b></Button>
                        </a>
                        <a href = "//brainster.io/business">
                            <Button variant = "dark" className = "btnBlack"><b>Обуки за компании</b></Button>
                        </a>
                    </div>
                </div>
                <CardsDetailComp cardId = {this.state.id}/>
                <FooterHeaderComp footerStyle = "singlePage" />
                <FooterComp />
            </div>
        );
    }

}

export default SinglePageComp;