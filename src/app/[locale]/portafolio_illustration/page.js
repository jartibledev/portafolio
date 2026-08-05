'use client'
// ✅ Obliga a Next.js a renderizar la página de forma dinámica y no usar caché estática
export const dynamic = 'force-dynamic'; 

// ... (el resto de tus imports y tu código se quedan exactamente igual)
import React, { useEffect, useState, useRef} from "react";
import {  Portafolio,  Section,  HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, ContainerPictureComponent, RectangleComponent, FooterComponent, BlankSpaceComponent, FirstAnimation } from "../../styles/ComponentStyles";
import ScrollReveal from "../../ScrollReveal";
import Link from "next/link";
import PostComponent from "../../styles/modal";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LanguageSelector from "@/app/styles/LanguageSelector";
import { useIsTouchDevice } from "@/app/styles/useTablet";
import { useIsMobile } from "@/app/styles/useMobile";
import LanguageSelectorFixed from "@/app/styles/LanguageSelectorFixed";
import FrameArrowButton from "@/app/styles/ArrowButton";

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


function PortafolioIllustrationForm (props){
        const t = useTranslations();
        const [isOpen, setIsOpen] = useState(false);
        const [imagenActual, setImagenActual] = useState('');
        const isMobile = useIsMobile();
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);

        const params = useParams();
        const currentLocale = params?.locale || 'es';
        const [isActive, setIsActive] = useState(false);
        const isTouch = useIsTouchDevice();
        const [isMounted, setIsMounted] = useState(false);
        const rectProps = isTouch ? {
                    $filter: "none",
                    $backdropfilter: "none",
                    onTouchStart: () => setIsActive(true),
                    onTouchEnd: () => setTimeout(() => setIsActive(false), 1000)
                } : {
                    $filter: "blur(9px)",
                    $backdropfilter: "blur(9px)",
                    $filterhover: "none",
                    $backdropfilter: "none"
        
                    // Las props de PC
                };
        const postProps = isTouch ? {
            $filter: "none",
            $backdropfilter: "none",
            onTouchStart: () => setIsActive(true),
            onTouchEnd: () => setTimeout(() => setIsActive(false), 1000)
            } : {
            $filter: "blur(9px)",
            $backdropfilter: "blur(9px)",
            $filterhover: "none",
            $backdropfilter: "none"
        };       
        const sectionProps = isMobile ? {
            $flexdirection:"column",
            $height:"auto", 
            $paddingbottom: "5%"
            } : {
            $flexdirection:"row",
            $height:"auto", 
            $paddingbottom: "5%"
        };       
        const textComponentsProps = isTouch ? { 
            $marginbottom: "5%"
            } : { 
            $marginbottom: "25%"
        };       
            
            useEffect(() => {
                    setIsMounted(true);
                }, []);

                // Si aún no se ha montado, renderizamos algo neutro (o lo de PC por defecto)
                // Esto evita el error de "Hydration Mismatch"
                
                  
                  
        
    


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

                 const lenguageOpacity = isTouch ? "1" : "0.3";
                
                
    return(
        <ArticleComponent>
            {isMobile ? (
      <SectionComponent $height="10vh">
        <LanguageSelectorFixed mobile={true} opacity={lenguageOpacity} />
      </SectionComponent>
    ) : (
      <LanguageSelector opacity={lenguageOpacity} />
    )}
            
            
           <SectionComponent $height="25vh" $flexdirection="row" >  

                <FrameArrowButton targetPath="/es/home_page"></FrameArrowButton>
            
               <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">   
                                    
                                    <Portafolio>
                                    {t("PortafolioIllustration.Portafolio")}
                                    </Portafolio>
                                    <Section>
                                        {t("PortafolioIllustration.Section")}
                                    </Section>
            
                </RectangleComponent>
            </SectionComponent>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent $height="80vh" $flexdirection="row">
                <ContainerPictureComponent>
                    <PostComponent {...postProps} $height="100%" linkImage="/illustrations/concepart_1_2_export.avif" project="PortafolioIllustration.ConceptArt.Name" date="2026" explanation="PortafolioIllustration.ConceptArt.Explanation" left="70%" textalign="start" width="300px" >
                    </PostComponent>
                </ContainerPictureComponent>
            </SectionComponent>
           </FirstAnimation>

           
            <SectionComponent {...sectionProps}  >
               
               <ScrollReveal $direction="left">
                <ContainerPictureComponent > 
                    <PostComponent {...postProps} $height="auto" linkImage="/illustrations/experimentation_2_export_to_web.avif" project="PortafolioIllustration.ChappelRoan.Name" date="2026" explanation="PortafolioIllustration.ChappelRoan.Explanation" right="105%" textalign="end" >
                    </PostComponent>
                </ContainerPictureComponent>
               </ScrollReveal>


               <ScrollReveal $direction={"right"} >
                    <ContainerPictureComponent>
                        <PostComponent {...postProps} $height="auto" linkImage="/illustrations/minadesolada_web_export.avif" project="PortafolioIllustration.Carrie.Name" date="2026" explanation="PortafolioIllustration.Carrie.Explanation" left="105%" textalign="start" >
                    </PostComponent>
                    </ContainerPictureComponent>
                     </ScrollReveal> 
            </SectionComponent> 
           
            <ScrollReveal >
                <SectionComponent {...sectionProps} > 
                    <TextComponent  >
                        <ReachOut>{t("PortafolioIllustration.ReachOut.Title")}</ReachOut>
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
                        <HeadPhilosophy>{t("PortafolioIllustration.ReachOut.Phylosophy.Title")}</HeadPhilosophy>
                        <Dropline>{t("PortafolioIllustration.ReachOut.Phylosophy.Description")}</Dropline>
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

export default PortafolioIllustrationForm;