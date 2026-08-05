'use client'
import React, { useEffect, useState, useRef} from "react";
import { Head, FooterText, Work, DateWork, Courses, Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, RectangleComponent, FooterComponent,  FirstAnimation,  ProgressBarContainerComponent, ProgressBarComponent, SliderContainer, SliderTrack, Slide, scroll, toLeft, CoursesComponent, UniversitiesComponent  } from "../../styles/ComponentStyles";
import ScrollReveal from "../../ScrollReveal";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { useIsTouchDevice } from "@/app/styles/useTablet";
import { useIsMobile } from "@/app/styles/useMobile";
import LanguageSelector from "@/app/styles/LanguageSelector";
import LanguageSelectorFixed from "@/app/styles/LanguageSelectorFixed";



const styleImage =  {
    objectFit: 'contain',
    objectPosition: ' center',
      
}
const styleLogos ={
    objectFit: 'contain',
    objectPosition: ' center',
    width: "200px"
   
      
}

const styleLogosLeanguagesProgressBar ={
    display: 'flex',
    objectFit: 'contain',
    objectPosition: ' center',
    width:'100%',
    justifyContent: 'center', /* Centrado horizontal */
    alignItems: 'center',
    filter: "none",
    backdropFilter:  "none",
    verticalAlign: 'middle',
    margin: 'auto'
      
}
const styleLogoImageLeanguages ={
    objectFit: 'contain',
    objectPosition: ' center',
      
}
const styleLogoImageLeanguagesGallery ={
    objectFit: 'contain',
    objectPosition: ' center',
    overFlow: 'hiden',
    width: '100%',
    height: 'auto',
    paddingBottom: '5%',
    flexDirection: 'row'
      
}



const logos = [
  '/icons/leanguages_programs/png-javascript-badge-picture-8.avif',
  '/icons/leanguages_programs/HTML5.avif',
  '/icons/leanguages_programs/CSS3.avif',
  '/icons/leanguages_programs/react_icon.avif',
  '/icons/leanguages_programs/java_logo.avif',
  '/icons/leanguages_programs/c++.svg',
  '/icons/leanguages_programs/vulkan.avif',
  '/icons/leanguages_programs/opengl.avif',
  '/icons/leanguages_programs/python.avif',
];
const softwareDesign = [
  '/icons/graphic_software/Adobe_Illustrator_CC_icon.svg.avif',
  '/icons/graphic_software/Adobe_InDesign_CC_icon.svg.avif',
  '/icons/graphic_software/Adobe_Photoshop_CC_icon.svg.avif',
  '/icons/graphic_software/Adobe_Premiere_Pro_CC_icon.svg.avif',
  '/icons/graphic_software/Blender_logo_no_text.svg.avif',
  '/icons/graphic_software/GIMP-Logo.wine.svg',
  '/icons/graphic_software/Inkscape_Logo.svg.avif',
  '/icons/graphic_software/Logo_Blender.svg.avif',
  '/icons/graphic_software/Scribus_logo.svg.avif',
];
  const infiniteImages = [...logos, ...logos];
  const infiniteImagesGraphicDesign = [...softwareDesign, ...softwareDesign];
function AboutMe ( props ){
  
    const [isVisible, setIsVisible] = useState(false);
            const sectionRef = useRef(null);
            const t = useTranslations();
            const params = useParams();
            const currentLocale = params?.locale || 'es';
            const isTouch = useIsTouchDevice();
            const isMobile = useIsMobile();
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
            const imageProps = isMobile ? {
                    $overflow: "contain",
                    $filter:"none",
                    $filterbackdrop:"none",    
                        } : {
                    $overflow: "hidden",
                    $filter:"none",
                    $filterbackdrop:"none",          
                    };       
            const galleryProps = isMobile ? {
                    $flexdirection:"column",
                    $paddingbottom:"5%",
                        } : {
                    $flexdirection:"row",
                    $paddingbottom:"10%",     
                    };  

            const sectionProps = isMobile ? {
                $flexdirection:"column",
                $height:"auto", 
                $paddingbottom: "5%"
                } : {
                $flexdirection:"column",
                $height:"auto", 
                $paddingbottom: "25%"
            };       
            const textComponentsProps = isTouch ? { 
                $marginbottom: "5%"
                } : { 
                $marginbottom: "25%"
            };       
            const textUniversitiesCoursesProps = isMobile ? { 
                $marginbottom: "5%"
                } : { 
                $marginbottom: "25%"
            };       
            const titleProps  = isMobile ? { 
                $flexdirection: "column"
                } : { 
                $flexdirection: "row"
            };       
            const flagsProps = isMobile ? { 
                width: "10vw",
                height: "10vw",
                objectFit: 'contain',
                objectPosition: ' center',
                filter: "none",
                backdropFilter:  "none"
                } : { 
                width: "10vw",
                height: "10vh",
                objectFit: 'contain',
                objectPosition: ' center',
                filter: "none",
                backdropFilter:  "none"
            };       
                        
            useEffect(() => {
                    setIsMounted(true);
                }, []);

                // Si aún no se ha montado, renderizamos algo neutro (o lo de PC por defecto)
                // Esto evita el error de "Hydration Mismatch"
                
            const lenguageOpacity = isTouch ? "1" : "0.3";

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
                        rootMargin: "0px 0px 1000px 0px"
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
            {isMobile ? (
                  <SectionComponent $height="10vh">
                    <LanguageSelectorFixed mobile={true} opacity={lenguageOpacity} />
                  </SectionComponent>
                ) : (
                  <LanguageSelector opacity={lenguageOpacity} />
                )}

            <nav style ={{display: 'flex', position:'sticky', flexDirection: 'row', justifyContent: 'center'}}> </nav>
            
            <SectionComponent $height= "30vh" $flexdirection="row">
               
            <Link href="../home_page" passHref >
                <FooterComponent><Footer>{t("AboutMe.BackToHomePage")}</Footer></FooterComponent> 
            </Link>
                <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
                    <Head>
                        {t("AboutMe.Title")}
                    </Head>

                </RectangleComponent>
            
           </SectionComponent>
           
           <FirstAnimation ref={sectionRef} $isVisible={isVisible} style= {{flexDirection: 'row'}} $margin> 
                <SectionComponent {...sectionProps} >
                    <ContainerPictureComponent >
                        <PictureComponent {...imageProps}>
                            <Image src="/profile/image_bio.avif"
                                    alt = "picture of me"
                                    fill
                                    style= {styleImage}></Image>
                            
                        </PictureComponent> 
                    </ContainerPictureComponent>
                    <TextComponent  >
                        <HeadPhilosophy>
                            {t("AboutMe.Bio.Title")}
                        </HeadPhilosophy>
                        <FooterText style={{textAlign: 'right'}}>
                                {t("AboutMe.Bio.Description")}
                        </FooterText>
                    </TextComponent>
            </SectionComponent>
           </FirstAnimation>
            <ScrollReveal>
           <SectionComponent {...sectionProps} >
                
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        {t("AboutMe.Formation.Title")}
                    </HeadPhilosophy>
                    <FooterText>
                       {t("AboutMe.Formation.Description")}
                    </FooterText>
                </TextComponent>

                <GalleryComponent {...galleryProps}  >   
                        <PictureComponent {...imageProps}>
                            <Image src="/icons/universities/LOGOUMA.avif"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent {...imageProps}>
                            <Image src="/icons/universities/UPV-Emblem.avif"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent {...imageProps} >
                            <Image src="/icons/universities/LOGO_STANDFORD.avif"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>

                    
                </GalleryComponent>
                <TextComponent {...textComponentsProps}>
                    <UniversitiesComponent  >
                    <FooterPictureComponent {...titleProps}>
                        <Work>
                            {t("AboutMe.Formation.UMA.University")}
                        </Work>
                        <DateWork>
                            2018-2023
                        </DateWork>
                    </FooterPictureComponent>
                    <CoursesComponent >
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Illustrator")}
                        </Courses>
                    </CoursesComponent>
                    <CoursesComponent >
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Indesign")}
                        </Courses>
                    </CoursesComponent>
                    <CoursesComponent >
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Textil")}
                        </Courses>
                    </CoursesComponent>
                    </UniversitiesComponent>

                    <UniversitiesComponent >
                    <FooterPictureComponent {...titleProps}>
                        <Work>
                            {t("AboutMe.Formation.UPV.University")}
                        </Work>
                        <DateWork>
                            2023-{t("AboutMe.Actuality")}
                        </DateWork>
                    </FooterPictureComponent>
                    </UniversitiesComponent>
                    <UniversitiesComponent >
                    <FooterPictureComponent {...titleProps}>
                        <Work>
                            {t("AboutMe.Formation.Standford.University")}
                        </Work>
                        <DateWork>
                            2026-{t("AboutMe.Actuality")}
                        </DateWork>
                    </FooterPictureComponent>
                </UniversitiesComponent>    
                </TextComponent>
           </SectionComponent>
           </ScrollReveal>
           <ScrollReveal>    
           <SectionComponent $height="auto"  >
                <TextComponent>
                    <HeadPhilosophy style={{textAlign: 'right'}}>
                        {t("AboutMe.Skills.Title")}
                    </HeadPhilosophy>
                    <FooterText>
                        {t("AboutMe.Skills.Description")}
                    </FooterText>
                </TextComponent>
           </SectionComponent>
           </ScrollReveal>
           <ScrollReveal $direction="left">
            <SectionComponent $height="auto" >
                <TextComponent>
                    <Work>
                        {t("AboutMe.Skills.Programmes")}
                    </Work>
                </TextComponent>
            </SectionComponent>
            </ScrollReveal>
            <SliderContainer style={{ width: "100%", overflow: "hidden", position: "relative" }}>
                    <SliderTrack 
                        style={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            flexWrap: "nowrap", 
                            width: "max-content", // Permite que el track crezca todo lo que necesite
                            animation: `${scroll.name} 25s linear infinite` // Usamos .name para el string exacto
                        }}
                    >
                        {infiniteImages.map((src, index) => (
                            <Slide key={index} style={{ flexShrink: 0, width: "250px" }}> 
                                <Image 
                                    src={src} 
                                    alt={`Trabajo ${index}`} 
                                    width={150} 
                                    height={150}
                                    style={{ objectFit: 'contain', borderRadius: '10px' }}
                                />
                            </Slide>
                        ))}
                    </SliderTrack>
            </SliderContainer>
            <ScrollReveal $direction="left">
            <SectionComponent $height="auto" >
                <TextComponent $textalign = "end">
                    <Work>
                        {t("AboutMe.Skills.SofwareDesign")}
                    </Work>
                </TextComponent>
            </SectionComponent>
            </ScrollReveal>
             <SliderContainer  style={{ width: "100%", overflow: "hidden", position: "relative" }}>
                    <SliderTrack 
                        style={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            flexWrap: "nowrap", 
                            width: "max-content", // Permite que el track crezca todo lo que necesite
                            // Usamos .name para el string exacto
                        }}
                        $animation = {toLeft}
                    >
                        {infiniteImagesGraphicDesign.map((src, index) => (
                            <Slide key={index} style={{ flexShrink: 0, width: "250px" }}> 
                                <Image 
                                    src={src} 
                                    alt={`Trabajo ${index}`} 
                                    width={150} 
                                    height={150}
                                    style={{ objectFit: 'contain', borderRadius: '10px' }}
                                />
                            </Slide>
                        ))}
                    </SliderTrack>
            </SliderContainer>
           <ScrollReveal>
                <SectionComponent $height='auto' >
                                       
                                                <HeadPhilosophy style= {{textAlign: 'left'}}>
                                                    {t("AboutMe.Leanguages.Title")}
                                                </HeadPhilosophy>
                                                <GalleryComponent>

                                                    <ScrollReveal threshold={0.8}>
                                                        <ContainerPictureComponent style={styleLogoImageLeanguagesGallery}>
                                                            <PictureComponent  $minwidth="50px" $minheight="auto" $filter="none" $filterbackdrop="none" style={flagsProps}>
                                                                <Image src="/icons/leanguages/Spanish_flag.svg"
                                                                    alt = "Spanish flag"
                                                                    fill
                                                                    style={styleLogoImageLeanguages}
                                                                    ></Image>
                                                                    </PictureComponent>

                                                            <PictureComponent $minwidth="50px" $minheight="auto"  $filter="none" $filterbackdrop="none" style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent $width="100%" $height="10px">
                                                                    <ProgressBarComponent $progress='100%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                            </PictureComponent>        
                                                        </ContainerPictureComponent>
                                                    </ScrollReveal>


                                                    <ScrollReveal  threshold={0.8}>
                                                    <ContainerPictureComponent  style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent $minwidth="50px" $minheight="auto" $filter="none" $filterbackdrop="none" style={flagsProps}>
                                                            <Image src="/icons/leanguages/England_flag.svg"
                                                                alt = "UK flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent>

                                                        <PictureComponent  $minwidth="50px" $minheight="auto" $filter="none" $filterbackdrop="none" style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent $width="100%" $height="10px">
                                                                    <ProgressBarComponent  $progress='90%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>    
                                                    </ContainerPictureComponent>
                                                    </ScrollReveal>

                                                    <ScrollReveal threshold={0.8} >
                                                    <ContainerPictureComponent  style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={flagsProps}>
                                                            <Image src="/icons/leanguages/French_flag.svg"
                                                                alt = "French flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent> 
                                                        

                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent $width="100%" $height="10px">
                                                                    <ProgressBarComponent $width="100%" $height="10px" $progress='40%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>    
                                                    </ContainerPictureComponent>
                                                    </ScrollReveal>

                                                    <ScrollReveal threshold={0.8} >

                                                    <ContainerPictureComponent style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={flagsProps}>
                                                            <Image src="/icons/leanguages/German_flag.svg"
                                                                alt = "German flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent>
                                                       
                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={styleLogosLeanguagesProgressBar}>
                                                               <ProgressBarContainerComponent $width="100%" $height="10px">
                                                                    <ProgressBarComponent  $progress='20%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>
                                                    </ContainerPictureComponent>
                                                    </ScrollReveal>
                                                </GalleryComponent>
                                       

                            
                </SectionComponent>
           </ScrollReveal>

            
           <SectionComponent>

           </SectionComponent>
           <SectionComponent>

           </SectionComponent>
           <SectionComponent>

           </SectionComponent>
        </ArticleComponent>
        
    )
}

export default AboutMe;