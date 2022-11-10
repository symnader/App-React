import React from "react";

import './home-top.css'
import HeaderComponent from '../../../layout/header/header'
import LogoCompoent from "./logo/logo";
import LocationComponent from "./location/location";
import NavbarComponent from "./navbar/navbar";

const HomeTopComponent = (props) => {
    return(
        <HeaderComponent>
            <LogoCompoent></LogoCompoent>
            <LocationComponent></LocationComponent>
            
            <div className="px-20 py-5 border">Login</div>
            <div className="px-10 py-5 border">Free-Advertise</div>
        </HeaderComponent>
    )
}

export default HomeTopComponent