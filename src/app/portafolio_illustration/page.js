'use client'
import React, { useEffect, useState, useRef} from "react";
import { Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut, FooterText } from "../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, RectangleComponent, FooterComponent, BlankSpaceComponent, FirstAnimation, ProjectSinopsis } from "../styles/ComponentStyles";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import Image from 'next/image';
import ProjectComponent from "../styles/ProjectSinopsisComponent";
import PostComponent from "../styles/modal";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

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
        const { t } = useTranslation('common');
        const router = useRouter();
        const { locale, locales } = router;
        const changeLanguage = (lng) => {
        router.push(router.pathname, router.asPath, { locale: lng });
        };
        const [isOpen, setIsOpen] = useState(false);
        const [imagenActual, setImagenActual] = useState('');
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
                    <PostComponent $height="100%" linkImage="/illustrations/concepart_1_2_export.jpg" project="Concept Art" date="2026" explanation="This is a concept art" left="79%" textalign="start" >
                    </PostComponent>
                </ContainerPictureComponent>
            </SectionComponent>
           </FirstAnimation>

           
            <SectionComponent $flexdirection="row" $height="auto" $paddingbottom = "5%"  >
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    <PostComponent $height="auto" linkImage="/illustrations/experimentation_2_export_to_web.jpg" project="Chappel Roan" date="2026" explanation="This is an illsutration of Chappel Roan" right="105%" textalign="end" >
                    </PostComponent>
                </ContainerPictureComponent>
               </ScrollReveal>


               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        <PostComponent $height="auto" linkImage="/illustrations/minadesolada_web_export.jpg" project="Prueba" date="2026" explanation="Esta es una prueba" left="105%" textalign="start" >
                    </PostComponent>
                    </ContainerPictureComponent>
                     </ScrollReveal> 
            </SectionComponent> 
           
            <ScrollReveal >
                <SectionComponent $flexdirection="row" $height="auto" > 
                    <TextComponent>
                        <ReachOut>{t("ReachOut.Title")}</ReachOut>
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