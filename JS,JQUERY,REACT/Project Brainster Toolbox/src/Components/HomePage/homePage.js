import React from "react";
import NavBarComp from "../NavBar/navBar";
import HeaderComp from "../Header/header";
import CardsComp from "../Cards/cards";
import FooterHeaderComp from "../Footer/footerHeader";
import FooterComp from "../Footer/footer";
class HomePageComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

  

    render(){
        return(
            <div className = "homePageDiv">
                <NavBarComp navBarStyle = "solid"/>
                <HeaderComp />
                <CardsComp />
                <FooterHeaderComp footerStyle = "homePage" />
                <FooterComp />
            </div>
        );
    }

}

export default HomePageComp;