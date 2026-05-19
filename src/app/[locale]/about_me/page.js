'use client'
import React, { useEffect, useState, useRef} from "react";
import { Head, FooterText, Work, DateWork, Courses, Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, RectangleComponent, FooterComponent,  FirstAnimation,  ProgressBarContainerComponent, ProgressBarComponent, SliderContainer, SliderTrack, Slide, scroll, toLeft  } from "../../styles/ComponentStyles";
import ScrollReveal from "../../ScrollReveal";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';



const styleImage ={
    objectFit: 'cover',
    objectPosition: ' center',
      
}
const styleLogos ={
    objectFit: 'contain',
    objectPosition: ' center',
    width: "200px"
   
      
}
const styleLogosLeanguages ={
    objectFit: 'contain',
    objectPosition: ' center',
    width: '25%',
    filter: "none",
    backdropFilter:  "none"
      
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
  '/icons/leanguages_programs/png-javascript-badge-picture-8.png',
  '/icons/leanguages_programs/HTML5.png',
  '/icons/leanguages_programs/CSS3.png',
  '/icons/leanguages_programs/react_icon.png',
  '/icons/leanguages_programs/java_logo.png',
  '/icons/leanguages_programs/c++.svg',
  '/icons/leanguages_programs/vulkan.png',
  '/icons/leanguages_programs/opengl.png',
  '/icons/leanguages_programs/python.png',
];
const softwareDesign = [
  '/icons/graphic_software/Adobe_Illustrator_CC_icon.svg.png',
  '/icons/graphic_software/Adobe_InDesign_CC_icon.svg.png',
  '/icons/graphic_software/Adobe_Photoshop_CC_icon.svg.png',
  '/icons/graphic_software/Adobe_Premiere_Pro_CC_icon.svg.png',
  '/icons/graphic_software/Blender_logo_no_text.svg.png',
  '/icons/graphic_software/GIMP-Logo.wine.svg',
  '/icons/graphic_software/Inkscape_Logo.svg.png',
  '/icons/graphic_software/Logo_Blender.svg.png',
  '/icons/graphic_software/Scribus_logo.svg.png',
];
  const infiniteImages = [...logos, ...logos];
  const infiniteImagesGraphicDesign = [...softwareDesign, ...softwareDesign];
function AboutMe ( props ){
  
    const [isVisible, setIsVisible] = useState(false);
            const sectionRef = useRef(null);
            const t = useTranslations();
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
            
            <SectionComponent $height= "30vh">
            <Link href="../home_page" passHref >
                <FooterComponent>Back to see my others portafolios</FooterComponent> 
            </Link>
                <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
                    <Head>
                        {t("AboutMe.Title")}
                    </Head>

                </RectangleComponent>
            
           </SectionComponent>
           
           <FirstAnimation ref={sectionRef} $isVisible={isVisible} style= {{flexDirection: 'row'}} $margin> 
                <SectionComponent $flexdirection="row" $height="auto" >
                    <ContainerPictureComponent >
                        <PictureComponent $height="100%">
                            <Image src="/profile/image_bio.jpg"
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
           <SectionComponent $paddingbottom="10%" $height="auto" >
                
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        {t("AboutMe.Formation.Title")}
                    </HeadPhilosophy>
                    <FooterText>
                       {t("AboutMe.Formation.Description")}
                    </FooterText>
                </TextComponent>

                <GalleryComponent $flexdirection="row" $paddingbottom="10%"  >   
                        <PictureComponent $filter="none" $filterbackdrop="none">
                            <Image src="/icons/universities/LOGOUMA.jpg"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none">
                            <Image src="/icons/universities/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/icons/universities/LOGO_STANDFORD.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>

                    
                </GalleryComponent>
                <TextComponent >
                    <TextComponent>
                    <FooterPictureComponent>
                        <Work>
                            {t("AboutMe.Formation.UMA.University")}
                        </Work>
                        <DateWork>
                            2018-2023
                        </DateWork>
                    </FooterPictureComponent>
                    <TextComponent>
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Illustrator")}
                        </Courses>
                    </TextComponent>
                    <TextComponent>
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Indesign")}
                        </Courses>
                    </TextComponent>
                    <TextComponent>
                        <Courses>
                            {t("AboutMe.Formation.UMA.Courses.Textil")}
                        </Courses>
                    </TextComponent>
                    </TextComponent>

                    <TextComponent>
                    <FooterPictureComponent>
                        <Work>
                            {t("AboutMe.Formation.UPV.University")}
                        </Work>
                        <DateWork>
                            2023-{t("AboutMe.Actuality")}
                        </DateWork>
                    </FooterPictureComponent>
                    </TextComponent>
                    <TextComponent>
                    <FooterPictureComponent>
                        <Work>
                            {t("AboutMe.Formation.Standford.University")}
                        </Work>
                        <DateWork>
                            2026-{t("AboutMe.Actuality")}
                        </DateWork>
                    </FooterPictureComponent>
                </TextComponent>    
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
                                                            <PictureComponent $minwidth="50px" $minheight="auto" $filter="none" $filterbackdrop="none" style={styleLogosLeanguages}>
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
                                                        <PictureComponent $minwidth="50px" $minheight="auto" $filter="none" $filterbackdrop="none" style={styleLogosLeanguages}>
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
                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={styleLogosLeanguages}>
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
                                                        <PictureComponent  $minwidth="50px" $minheight="auto" style={styleLogosLeanguages}>
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

            <ScrollReveal>
                <SectionComponent $height= "auto">
                    <TextComponent>
                        <HeadPhilosophy>
                            {t("AboutMe.Hobbies.Title")}
                        </HeadPhilosophy>
                        <FooterText>
                            {t("AboutMe.Hobbies.Description")}
                        </FooterText>
                    </TextComponent>
                    <GalleryComponent $flexdirection = "row" >   
                    
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/images/LOGOUMA.jpg"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/icons/universities/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/icons/universities/LOGO_STANDFORD.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>

                    
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