import React from "react";

import Wrapper from '../../hoc/wrapper'

const MasterPageComponent = (props) => {
    return(        
        <Wrapper>
            <div>{props.children}</div>            
        </Wrapper>
    )
}

export default MasterPageComponent