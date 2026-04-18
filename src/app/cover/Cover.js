import { ButtonStar, App, ButtonPortafolio, BlankSpace, HeadPortafolio  } from "../styles/stylesStroke"
import { Head, Section, Portafolio    } from "../styles/StylesParagraph.styles"

function CoverForm (props){
    return(
        <div>
            <ButtonStar>
                <Head>
                    Start
                </Head>

            </ButtonStar>
            <ButtonPortafolio>
                <Portafolio>
                    Portafolio
                </Portafolio>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <Section>
                    dev
                </Section>
                
            </ButtonPortafolio>
            <HeadPortafolio>
                <Portafolio>
                    Portafolio
                </Portafolio>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <BlankSpace></BlankSpace>
                <Section>
                    dev
                </Section>
            </HeadPortafolio>
        </div>
        
    )
}

export default CoverForm;