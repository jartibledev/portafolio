'use client'
import React, { useEffect, useState, useRef} from "react";
import { Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut, FooterText } from "../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, RectangleComponent, FooterComponent, BlankSpaceComponent, FirstAnimation, ProjectSinopsis } from "../styles/ComponentStyles";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import Image from 'next/image';
import ProjectComponent from "../styles/ProjectSinopsisComponent";

//import miImagen from '../concepart_1_2_export.jpg'
const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top',
    opacity: "inherit",
    transition: "inherit"
      
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
                            threshold: 0.2,
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
            
           <SectionComponent $height="25vh" >
               <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
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
                                    
                </RectangleComponent>
            </SectionComponent>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent $height="80vh" $flexdirection="row">
                <ContainerPictureComponent>
                        <PictureComponent  $height="100%">
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/illustrations/concepart_1_2_export.jpg"
                            alt = "illustration concept art"
                            priority={false}
                            fill
                            style= {styleImage}
                            onLoadingComplete={(img) => {
                            img.style.opacity = "1";
                            }}
                            >
                            </Image>
                             </Link>
                        </PictureComponent>
                    <FooterPictureComponent>
                        <Projects>Concept Art</Projects>
                        <DateFooter>2026</DateFooter>
                    </FooterPictureComponent>
                    <ProjectComponent project="Concept Art" explanation="This is a conceopt art" $left="75%" ></ProjectComponent>
                </ContainerPictureComponent>
            </SectionComponent>
           </FirstAnimation>

           
            <SectionComponent $flexdirection="row" $height="auto" $paddingbottom = "5%"  >
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    
                        <PictureComponent >
                            <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                            <Image src="/illustrations/experimentation_2_export_to_web.jpg"
                            alt = "Chappel Roan"
                            fill
                            priority={false}
                            style= {styleImage}
                            onLoadingComplete={(img) => {
                            img.style.opacity = "1";
                            }}
                            >
                            </Image>
                             </Link>
                        </PictureComponent>
                    <FooterPictureComponent>
                        <Projects>Chappel Roan</Projects>
                        <DateFooter>2026</DateFooter>
                    </FooterPictureComponent>
                     <ProjectComponent project="Chappel Roan" explanation="This is an illustration of Chappel Roan" $right="105%" $textalign="end"></ProjectComponent>
                </ContainerPictureComponent>
               </ScrollReveal>
               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        
                            <PictureComponent $height="auto">
                                <Link href="https://cara.app/post/ea7e25f8-c93d-4227-a13c-d110513520fb">
                                <Image src="/illustrations/minadesolada_web_export.jpg"
                                alt = "illustration concept art"
                                fill
                                priority={false}
                                style= {styleImage}
                                onLoadingComplete={(img) => {
                                img.style.opacity = "1";
                                }}
                                >
                                </Image>
                                </Link>
                            </PictureComponent>
                        <FooterPictureComponent>
                            <Projects>Carrie</Projects>
                            <DateFooter>2026</DateFooter>
                        </FooterPictureComponent> 
                      <ProjectComponent project="Carrie" explanation="This is an illustration of Carrie" $left="105%"></ProjectComponent>
                    </ContainerPictureComponent>
                     </ScrollReveal> 
              
            </SectionComponent> 
           
            <ScrollReveal >
                <SectionComponent $flexdirection="row" $height="auto" > 
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
            </ScrollReveal>
            
            <FooterComponent>
                <Link style = {linkDisplay} href="..\about_me" passHref>
                <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
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
                </RectangleComponent>
            </Link>
            
            
            </FooterComponent>
        </ArticleComponent>
        
        
    )
}

export default PortafolioIllustrationForm;