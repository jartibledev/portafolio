'use client'
import React, { useEffect, useState, useRef} from "react";
import {  Portafolio,  Section,  HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, ContainerPictureComponent, RectangleComponent, FooterComponent, BlankSpaceComponent, FirstAnimation } from "../../styles/ComponentStyles";
import ScrollReveal from "../../ScrollReveal";
import Link from "next/link";
import PostComponent from "../../styles/modal";
import PostComponentDev from "../../styles/modaldev";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LanguageSelector from "@/app/styles/LanguageSelector";

//import miImagen from '../concepart_1_2_export.avif'
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


function PortafolioDevForm (props ){
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
            <LanguageSelector></LanguageSelector>
               <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
                    <BlankSpaceComponent/>
                    <BlankSpaceComponent/>
                                    
                                    <Portafolio>
                                    {t("PortafolioDev.Portafolio")}
                                    </Portafolio>
                                    <Section>
                                        {t("PortafolioDev.Section")}
                                    </Section>
                    <BlankSpaceComponent/>
                    <BlankSpaceComponent/>
                                    
                </RectangleComponent>
            </SectionComponent>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent $height="80vh" $flexdirection="row">
                <ContainerPictureComponent>
                    <PostComponent $height="100%" linkImage="/illustrations/portada.avif" project="PortafolioDev.Post_1.Name" date="2026" explanation="PortafolioDev.Post_1.Explanation" left="70%" textalign="start" width="300px" >
                    </PostComponent>
                </ContainerPictureComponent>
            </SectionComponent>
           </FirstAnimation>

           
            <SectionComponent $flexdirection="row" $height="auto" $paddingbottom = "5%"  >
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    <PostComponentDev $height="auto" linkvideo="https://www.youtube.com/embed/XW3WmhowopM?si=iUNPMsYpzToqF8qC" github="https://github.com/jartibledev/export-to-web-gimp.git"  linkImage="/icons/projects_devs/export_to_web.svg" project="PortafolioDev.Post_2.Name" date="2026" explanation="PortafolioDev.Post_2.Explanation" right="105%" textalign="end" cover="contain" >
                    </PostComponentDev>
                </ContainerPictureComponent>
               </ScrollReveal>


               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        <PostComponentDev $height="auto" linkvideo="https://www.youtube.com/embed/qxgFz8Qj3cM?si=XeYZfsiK14nf5K0W" github="https://github.com/jartibledev/export-to-webp-gimp.git" linkImage="/icons/projects_devs/export_to_webp.svg" project="PortafolioDev.Post_3.Name" date="2026" explanation="PortafolioDev.Post_3.Explanation" left="105%" textalign="start" cover="contain" >
                    </PostComponentDev>
                    </ContainerPictureComponent>
                     </ScrollReveal> 
            </SectionComponent> 
            <SectionComponent $flexdirection="row" $height="auto" $paddingbottom = "5%"  >
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    <PostComponentDev $height="auto" linkvideo="https://www.youtube.com/embed/KKl08aYvuH0?si=tcrKs3pW2HFZdSCj" github="https://github.com/jartibledev/rename-files" linkImage="/icons/projects_devs/icon_rename.avif" project="PortafolioDev.Post_4.Name" date="2026" explanation="PortafolioDev.Post_4.Explanation" right="105%" textalign="end" cover="contain" >
                    </PostComponentDev>
                </ContainerPictureComponent>
               </ScrollReveal>


               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        <PostComponentDev $height="auto"  linkvideo="https://www.youtube.com/embed/LDCdm_tKpcw?si=MkRZOMelJgO3veNg" github="https://github.com/jartibledev/plugin-monochromatic-palette-generator.git" linkImage="/icons/projects_devs/palette_generator_logo.svg" project="PortafolioDev.Post_5.Name" date="2026" explanation="PortafolioDev.Post_5.Explanation" left="105%" textalign="start" cover="contain" >
                    </PostComponentDev>
                    </ContainerPictureComponent>
                     </ScrollReveal> 
            </SectionComponent> 
           
            <ScrollReveal >
                <SectionComponent $flexdirection="row" $height="auto" > 
                    <TextComponent>
                        <ReachOut>{t("PortafolioDev.ReachOut.Title")}</ReachOut>
                        <Link href="mailto:mayalopezdesign@gmail.com">
                            <SocialNetwork>Email</SocialNetwork>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sergio-maya-l%C3%B3pez-6981b331a/">
                            <SocialNetwork>Linkdln</SocialNetwork>
                        </Link>
                        <Link href="https://github.com/jartibledev">
                            <SocialNetwork>Github</SocialNetwork>
                        </Link>
                
                    </TextComponent>
                    <TextComponent>
                        <HeadPhilosophy>{t("PortafolioDev.ReachOut.Phylosophy.Title")}</HeadPhilosophy>
                        <Dropline>{t("PortafolioDev.ReachOut.Phylosophy.Description")}</Dropline>
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

export default PortafolioDevForm;