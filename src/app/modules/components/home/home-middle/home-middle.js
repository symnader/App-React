import React from "react";

import Wrapper from "../../../hoc/wrapper"
import ArticleComponent from '../../../layout/article/article'
import AsideComponent from '../../../layout/aside/aside'
import NavbarComponent from "../home-top/navbar/navbar";

const HomeComponent = (props) => {
    return(
        <Wrapper>
            <main className="flex justify-start flex-wrap sm:flex-nowrap">
                <AsideComponent>
                    <div className="min-w-fit">
                        <ul>
                            <li className="p-2">Link 1</li>
                            <li className="p-2">Link 2</li>
                            <li className="p-2">Link 3</li>
                            <li className="p-2">Link 4</li>
                            <li className="p-2">Link 5</li>
                        </ul>
                    </div>
                </AsideComponent>

                <ArticleComponent>
                  <div className="flex-1 w-full">
                        <section>header-filtering</section>
                        <section>body-list-adv</section>
                        <section>footer-descp-selected item</section>
                    </div> 
                </ArticleComponent>
            </main>
        </Wrapper>
    )
}

export default HomeComponent