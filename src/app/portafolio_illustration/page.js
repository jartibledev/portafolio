'use client'
import React, { useEffect, useState, useRef} from "react";
import { Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, rectangleComponent, FooterComponent, BlankSpaceComponent } from "../styles/ComponentStyles";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import Image from 'next/image';

//import miImagen from '../concepart_1_2_export.jpg'
const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top'
      
}
const linkDisplay = { 
    display:"flex", 
    justifyContent: "center"
}


function PortafolioIllustrationForm (props){
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
        <ArticleComponent>
            
           <SectionComponent>
               <rectangleComponent>
                    <BlankSpaceComponent/>
                    <BlankSpaceComponent/>
                                    
                                    <Portafolio>
                                        Portafolio
                                    </Portafolio>
                                    <Section>
                                        illustration
                                    </Section>
                    <BlankSpaceComponent/>
                    <BlankSpaceComponent/>
                                    
                </rectangleComponent>
            </SectionComponent>

            <SectionComponent>
                <ContainerPictureComponent>
                        <PictureComponent>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/concepart_1_2_export.jpg"
                            alt = "illustration concept art"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </PictureComponent>
                    <FooterPictureComponent>
                        <Projects>Concept Art</Projects>
                        <DateFooter>2026</DateFooter>
                    </FooterPictureComponent>
                </ContainerPictureComponent>
            </SectionComponent>
            <SectionComponent flexdirection="row">
                <ContainerPictureComponent>
                        <PictureComponent>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/experimentation_2_export_to_web.jpg"
                            alt = "Chappel Roan"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </PictureComponent>
                    <FooterPictureComponent>
                        <Projects>Chappel Roan</Projects>
                        <DateFooter>2026</DateFooter>
                    </FooterPictureComponent>
                </ContainerPictureComponent>
                <ContainerPictureComponent>
                        <PictureComponent>
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/images/minadesolada_web_export.jpg"
                            alt = "illustration concept art"
                            fill
                            style= {styleImage}
                            >
                            </Image>
                             </Link>
                        </PictureComponent>
                    <FooterPictureComponent>
                        <Projects>Carrie</Projects>
                        <DateFooter>2026</DateFooter>
                    </FooterPictureComponent>
                </ContainerPictureComponent>
            </SectionComponent>
            <SectionComponent> 
                <TextComponent>
                    <ReachOut>Reach out</ReachOut>
                    <Link href="mailto:mayalopezdesign@gmail.com">
                        <SocialNetwork>Email</SocialNetwork>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sergio-maya-l%C3%B3pez-6981b331a/">
                        <SocialNetwork>Linkdln</SocialNetwork>
                    </Link>
                    <Link href="https://cara.app/icouldlie">
                        <SocialNetwork>Cara App</SocialNetwork>
                    </Link>
               
                </TextComponent>
                <TextComponent>
                    <HeadPhilosophy>my art philosophy</HeadPhilosophy>
                    <Dropline>Behind every portfolio is a point of view. A great project page gives that sense of perspective to offer a glimpse of the person behind the work. Is it a particular artistic movement? A way of experiencing the world? What drives all these things to be the way they are?</Dropline>
                </TextComponent> 
               
            </SectionComponent>
            <FooterComponent>
                <Link style = {linkDisplay} href="..\about_me" passHref>
                <rectangleComponent>
                    <Portafolio>
                        About
                    </Portafolio>
                    <BlankSpaceComponent></BlankSpaceComponent>
                    <BlankSpaceComponent></BlankSpaceComponent>
                    <BlankSpaceComponent></BlankSpaceComponent>
                    <BlankSpaceComponent></BlankSpaceComponent>
                    <Section>
                        me
                    </Section>
                </rectangleComponent>
            </Link>
            
            
            </FooterComponent>
        </ArticleComponent>
        
        
    )
}

export default PortafolioIllustrationForm;