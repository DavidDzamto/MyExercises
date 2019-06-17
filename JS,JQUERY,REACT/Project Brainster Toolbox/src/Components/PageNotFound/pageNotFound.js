import React from "react";
import NavBarComp from "../NavBar/navBar";
import "./pageNotFound.css";

class PageNotFoundComp extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

  

    render(){
        return(
            <div className = "bgPageNotFound">
                <NavBarComp navBarStyle = "transparent"/>
            </div>
        );
    }

}

export default PageNotFoundComp;