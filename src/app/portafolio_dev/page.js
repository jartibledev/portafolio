'use client'
import React, { useEffect, useState, useRef} from "react";
import { Footer, Portafolio, Projects, sectionStyles, Section, Date, HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../styles/StylesParagraph.styles";
import { ButtonPortafolio, ArticleStyles, HeroStyles, SectionStyles, ContainerPicture, Picture, FooterPicture, HeadPortafolio, BlankSpace, Parraph, FooterStyles, PhilosophySection } from "../styles/stylesStroke";
import Link from "next/link";
import Image from 'next/image';
//import miImagen from '../concepart_1_2_export.jpg'
const styleImage ={
    objectFit: 'contain',
    objectPosition: ' center'
      
}
const linkDisplay = { 
    display:"flex", 
    justifyContent: "center"
}


function PortafolioDevForm (props){
    const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);

        useEffect(() =>{
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        setIsVisible(true);
                        observer.unobserve(entry.target)
                    }
                },
                {
                    threshold: 0.05,
                    rootMargin: "0px 0px -50px 0px"
                }
            );

            if (sectionRef.current){
                observer.observe(sectionRef.current);
            }
            return()=>{
                if(sectionRef.current){
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);
    return(
        <ArticleStyles>
           <HeroStyles>
               <HeadPortafolio>
                    <BlankSpace/>
                    <BlankSpace/>
                                    
                                    <Portafolio>
                                        Portafolio
                                    </Portafolio>
                                    <Section>
                                        dev
                                    </Section>
                    <BlankSpace/>
                    <BlankSpace/>
                                    
                </HeadPortafolio>
            </HeroStyles>
            <SectionStyles>
                <ContainerPicture>
                        <Picture>
                            <Link href="https://github.com/jartibledev/order-comic-pages.git">
                            <Image src="/images/icon_rename.png"
                            alt = "icon_rename_logo"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </Picture>
                    <FooterPicture>
                        <Projects>Rename App</Projects>
                        <Date>2026</Date>
                    </FooterPicture>
                </ContainerPicture>
            </SectionStyles>
            <SectionStyles>
                <ContainerPicture>
                        <Picture>
                            <Link href="https://github.com/jartibledev/plugin-monochromatic-palette-generator.git">
                            <Image src="/images/palette_generator_logo_web.jpg"
                            alt = "Monochromatic Generator Pallete Icon"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </Picture>
                    <FooterPicture>
                        <Projects>Monochromatic Palette</Projects>
                        <Date>2026</Date>
                    </FooterPicture>
                </ContainerPicture>
            </SectionStyles>
            <PhilosophySection ref={sectionRef} $isVisible={isVisible} > 
                <Parraph>
                    <ReachOut>Reach out</ReachOut>
                    <Link href="mailto:jartibledev@proton.me">
                        <SocialNetwork>Email</SocialNetwork>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sergio-maya-l%C3%B3pez-6981b331a/">
                        <SocialNetwork>Linkdln</SocialNetwork>
                    </Link>
                    <Link href="https://github.com/jartibledev">
                        <SocialNetwork>Git Hub</SocialNetwork>
                    </Link>
               
                </Parraph>
                <Parraph>
                    <HeadPhilosophy>my code philosophy</HeadPhilosophy>
                    <Dropline>Behind every portfolio is a point of view. A great project page gives that sense of perspective to offer a glimpse of the person behind the work. Is it a particular artistic movement? A way of experiencing the world? What drives all these things to be the way they are?</Dropline>
                </Parraph> 
               
            </PhilosophySection>
            <FooterStyles ref={sectionRef} $isVisible={isVisible}>
                <Link style = {linkDisplay} href="..\portafolio_dev" passHref>
                <ButtonPortafolio>
                    <Portafolio>
                        About
                    </Portafolio>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Section>
                        me
                    </Section>
                </ButtonPortafolio>
            </Link>
            
            
            </FooterStyles>
        </ArticleStyles>
        
        
    )
}

export default PortafolioDevForm;