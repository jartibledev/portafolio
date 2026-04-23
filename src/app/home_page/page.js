import React from "react";
import { Portafolio, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio } from "../styles/stylesStroke";
import Link from "next/link";

function HomePageForm (props){
    return(
        <article>
            <Link href="..\portafolio_dev" passHref>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        dev
                    </Section>
                </ButtonPortafolio>
            </Link>
            
            <Link href="..\portafolio_design" passHref>
                <ButtonPortafolio>
                    <Section>
                        design
                    </Section>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                </ButtonPortafolio>
            </Link>
            
            
          
            <Link href="..\portafolio_illustration" passHref>
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