import React from "react";

const AsideComponent = (props) => {
    return(        
        <aside className="p-2 m-2 border absolute right-0 top-0
                          sm:relative">{props.children}</aside>            
    )
}

export default AsideComponent