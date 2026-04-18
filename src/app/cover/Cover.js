import { ButtonStar, App, ButtonPortafolio, BlankSpace, HeadPortafolio  } from "../styles/stylesStroke"
import { Head, Section, Portafolio, Subtitle, SocialNetwork, Dropline, Date, Contact, Footer, FooterText, FooterSubtitle, Projects, LabelSocialMedia,    } from "../styles/StylesParagraph.styles"

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
            <div>
                <SocialNetwork>SocialNetwork</SocialNetwork>
                <Subtitle>Subtitle</Subtitle>
                <Dropline>Dropline</Dropline>
                <Date>Date</Date>
                <Contact>Contact</Contact>
                <Footer>Footer</Footer>
                <FooterText>FooterText</FooterText>
                <FooterSubtitle>FooterSubtitle</FooterSubtitle>
                <Projects>Projects</Projects>
                <LabelSocialMedia>LabelSocialMedia</LabelSocialMedia>
            </div>
        </div>
        
    )
}

export default CoverForm;