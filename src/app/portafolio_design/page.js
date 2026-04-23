
import React from "react";
import { Portafolio, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio, ArticleStyles, HeroStyles } from "../styles/stylesStroke";
import Link from "next/link";


function PortafolioDesignForm (props){
    return(
        <article>
           <HeroStyles>
            hola
            </HeroStyles>
            <section>
            </section>
             <footer>
                <Link  href="../about_me" passHref>
                    <button>About me</button>
                </Link>
            </footer>
        </article>
        
    )
}

export default PortafolioDesignForm;