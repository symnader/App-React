import React from "react";

const LicenseComponent = (props) => {
    return(        
        <section className="p-2 m-2 border">
            {props.children}
        </section>            
    )
}

export default LicenseComponent