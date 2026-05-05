import React from "react";
import { Footer, Portafolio, Projects, sectionStyles, Section, Date } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio, ArticleStyles, HeroStyles, SectionStyles, ContainerPicture, Picture, FooterPicture, HeadPortafolio } from "../styles/stylesStroke";
import Link from "next/link";
import Image from 'next/image';
//import miImagen from '../concepart_1_2_export.jpg'
const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top'
      
}

function PortafolioIllustrationForm (props){
    return(
        <ArticleStyles>
           <HeroStyles>
                <HeadPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        illustration
                    </Section>
                </HeadPortafolio>
            </HeroStyles>
            <SectionStyles>
                <ContainerPicture>
                        <Picture>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/concepart_1_2_export.jpg"
                            alt = "illustration concept art"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </Picture>
                    <FooterPicture>
                        <Projects>Concept Art</Projects>
                        <Date>2027</Date>
                    </FooterPicture>
                </ContainerPicture>
            </SectionStyles>
            <SectionStyles>
                <ContainerPicture>
                        <Picture>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/experimentation_2_export_to_web.jpg"
                            alt = "Chappel Roan"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </Picture>
                    <FooterPicture>
                        <Projects>Concept Art</Projects>
                        <Date>2027</Date>
                    </FooterPicture>
                </ContainerPicture>
                <ContainerPicture>
                        <Picture>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/minadesolada_web_export.jpg"
                            alt = "illustration concept art"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
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
        </ArticleStyles>
        
        
    )
}

export default PortafolioIllustrationForm;