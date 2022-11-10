import React from "react";

import Wrapper from "../../../hoc/wrapper";
import LicenseComponent from '../../../layout/lisence/lisence'
import FooterComponent from '../../../layout/footer/footer'

const HomeComponent = (props) => {
    return(
        <Wrapper>
            <LicenseComponent>
                <div className="flex justify-evenly flex-wrap">
                    <div className="px-10 py-3 border">Description</div>
                    <div className="px-10 py-3 border">Lisence</div>
                    <div className="px-10 py-3 border">Follow Me</div>                    
                </div>
            </LicenseComponent>

            <FooterComponent>
                <div className="flex justify-evenly flex-wrap">
                    <div className="px-10 py-3 border">Contact Us</div>
                    <div className="px-10 py-3 border">News</div>
                    <div className="px-10 py-3 border">Useful Link</div>
                    <div className="px-10 py-3 border">Copyright Descp</div>
                </div>
            </FooterComponent>            
        </Wrapper>
    )
}

export default HomeComponent