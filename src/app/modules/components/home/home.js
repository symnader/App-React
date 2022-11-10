import React from "react";


import HomeTopComponent from "./home-top/home-top"
import HomeMiddleComponent from "./home-middle/home-middle"
import HomeBottomComponent from "./home-bottom/home-bottom"

const HomeComponent = (props) => {
    return(
        <div className="flex-1">
            <div>
                <HomeTopComponent />
                <HomeMiddleComponent />
                <HomeBottomComponent />
            </div>
        </div>
    )
}

export default HomeComponent