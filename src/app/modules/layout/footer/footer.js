import React from "react";

const FooterComponent = (props) => {
    return(        
        <footer className="p-2 m-2 border">{props.children}</footer>            
    )
}

export default FooterComponent