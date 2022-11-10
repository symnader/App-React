import React from "react";

const HeaderComponent = (props) => {
    return(        
        <header className="p-2 m-2 border flex justify-start flex-wrap w-full">{props.children}</header>            
    )
}

export default HeaderComponent