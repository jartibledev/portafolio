import React from "react";
import { Portafolio, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio } from "../styles/stylesStroke";
import Link from "next/link";

function HomePageForm (props){
    return(
        <article>
            <Link href="..\portafolio_dev\page.js" passHref>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        dev
                    </Section>
                </ButtonPortafolio>
            </Link>
            
            <Link href="..\portafolio_design\page.js" passHref>
                <ButtonPortafolio>
                    <Section>
                        design
                    </Section>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                </ButtonPortafolio>
            </Link>
            
            
          
            <Link href="..\portafolio_illustration\page.js" passHref>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        illustration
                    </Section>
                </ButtonPortafolio>
            </Link>
            
        </article>
        
    )
}

export default HomePageForm;