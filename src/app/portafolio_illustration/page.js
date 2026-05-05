import React from "react";
import { Footer, Portafolio, Projects, sectionStyles, Section } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio, ArticleStyles, HeroStyles, SectionStyles, ContainerPicture, Picture, FooterPicture } from "../styles/stylesStroke";
import Link from "next/link";
import Image from 'next/image';
//import miImagen from '../concepart_1_2_export.jpg'
const styleImage ={
   objectFit: 'cover',
    objectPosition: 'center'  
}

function PortafolioIllustrationForm (props){
    return(
        <article>
           <HeroStyles>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        illustration
                    </Section>
                </ButtonPortafolio>
            </HeroStyles>
            <SectionStyles>
                <ContainerPicture>
                    <Picture>
                        <Image src="/images/concepart_1_2_export.jpg"
                        alt = "illustration concept art"
                        fill
                        style= {styleImage}
                        >
                              
                        </Image>
                    </Picture> 
                    <FooterPicture>
                        <Projects>Concept Art</Projects>
                        <Date>2027</Date>
                    </FooterPicture>
                </ContainerPicture>
            </SectionStyles>
            <footer>
                <Link  href="../about_me" passHref>
                    <button>About me</button>
                </Link>
            </footer>
        </article>
        
        
    )
}

export default PortafolioIllustrationForm;