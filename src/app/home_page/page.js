import React from "react";
import { Portafolio, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio } from "../styles/stylesStroke";


function HomePageForm (props){
    return(
        <article>
            <Link>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        dev
                    </Section>
                </ButtonPortafolio>
            </Link>
            
            <Link>
                <ButtonPortafolio>
                    <Section>
                        design
                    </Section>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                </ButtonPortafolio>
            </Link>
            
            
          
            <Link>
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