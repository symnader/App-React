import React from "react";

import './article.css'

const ArticleComponent = (props) => {
    return(        
        <article className="p-2 m-2 border">
            <section>
                {props.children}
            </section>
        </article>            
    )
}

export default ArticleComponent