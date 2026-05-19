'use client'
import React, { useEffect, useState, useRef} from "react";
import {  Portafolio,  Section,  HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, ContainerPictureComponent, RectangleComponent, FooterComponent, BlankSpaceComponent, FirstAnimation } from "../../styles/ComponentStyles";
import ScrollReveal from "../../ScrollReveal";
import Link from "next/link";
import PostComponent from "../../styles/modal";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

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


function PortafolioDesignForm (props ){
        const t = useTranslations();
        const [isOpen, setIsOpen] = useState(false);
        const [imagenActual, setImagenActual] = useState('');
        
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);

        const params = useParams();
        const currentLocale = params?.locale || 'es';
    


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
                                    {t("PortafolioIllustration.Portafolio")}
                                    </Portafolio>
                                    <Section>
                                        {t("PortafolioIllustration.Illustration")}
                                    </Section>
                    <BlankSpaceComponent/>
                    <BlankSpaceComponent/>
                                    
                </RectangleComponent>
            </SectionComponent>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent $height="80vh" $flexdirection="row">
                <ContainerPictureComponent>
                    <PostComponent $height="100%" linkImage="/illustrations/concepart_1_2_export.jpg" project="PortafolioIllustration.ConceptArt.Name" date="2026" explanation="PortafolioIllustration.ConceptArt.Explanation" left="70%" textalign="start" width="300px" >
                    </PostComponent>
                </ContainerPictureComponent>
            </SectionComponent>
           </FirstAnimation>

           
            <SectionComponent $flexdirection="row" $height="auto" $paddingbottom = "5%"  >
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    <PostComponent $height="auto" linkImage="/illustrations/experimentation_2_export_to_web.jpg" project="PortafolioIllustration.ChappelRoan.Name" date="2026" explanation="PortafolioIllustration.ChappelRoan.Explanation" right="105%" textalign="end" >
                    </PostComponent>
                </ContainerPictureComponent>
               </ScrollReveal>


               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        <PostComponent $height="auto" linkImage="/illustrations/minadesolada_web_export.jpg" project="PortafolioIllustration.Carrie.Name" date="2026" explanation="PortafolioIllustration.Carrie.Explanation" left="105%" textalign="start" >
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
                        <HeadPhilosophy>{t("ReachOut.Phylosophy.Title")}</HeadPhilosophy>
                        <Dropline>{t("ReachOut.Phylosophy.Description")}</Dropline>
                    </TextComponent> 
                
                </SectionComponent>
            </ScrollReveal>
            
            <FooterComponent>
                <Link style = {linkDisplay} href={`/${currentLocale}/about_me`} prefetch={true}>
                <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
                    <Portafolio>
                        {t("AboutMe.Title")}
                    </Portafolio>
                </RectangleComponent>
            </Link>
            
            
            </FooterComponent>
        </ArticleComponent>
        
        
    )
}

export default PortafolioDesignForm;