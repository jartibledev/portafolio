import React from "react";
import { Footer, Portafolio, Section } from "../styles/StylesParagraph.styles";
import { BlankSpace, ButtonPortafolio, sectionStyles, ArticleStyles, SectionStyles } from "../styles/stylesStroke";
import Link from "next/link";
const linkDisplay = { 
    display:"flex", 
    justifyContent: "center"
}
function HomePageForm (props){
    return(
        <ArticleStyles>
            <section style={{display: "flex", flexDirection: "column", justifyContent:"center", marginTop: "20vh", marginBottom: "20vh"  }}>
            <Link style = {linkDisplay} href="..\portafolio_dev" passHref>
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
            </Link>
            
            <Link style = {linkDisplay} href="..\portafolio_design" passHref>
                <ButtonPortafolio>
                    
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        design
                    </Section>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    
                </ButtonPortafolio>
            </Link>
            
            
          
            <Link style = {linkDisplay} href="..\portafolio_illustration" passHref>
                <ButtonPortafolio>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        illustration
                    </Section>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                </ButtonPortafolio>
            </Link>
            </section>
         </ArticleStyles>
        
        
    )
}

export default HomePageForm;