
import { Portafolio, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio } from "../styles/stylesStroke";

function HomePage (props){
    return(
        <article>
            <ButtonPortafolio>
                <Portafolio>
                    Portafolio
                </Portafolio>
                <Section>
                    dev
                </Section>
            </ButtonPortafolio>

            <ButtonPortafolio>
                <Section>
                    design
                </Section>
                <Portafolio>
                    Portafolio
                </Portafolio>
            </ButtonPortafolio>

            <ButtonPortafolio>
                <Portafolio>
                    Portafolio
                </Portafolio>
                <Section>
                    illustration
                </Section>
            </ButtonPortafolio>
        </article>
        
    )
}

export default CoverForm;