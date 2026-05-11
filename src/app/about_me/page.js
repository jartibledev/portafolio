'use client'
import React, { useEffect, useState, useRef} from "react";
import { Head, FooterText, Work, DateWork, Courses, Footer, Portafolio, Projects, Section, DateFooter, HeadPhilosophy, Dropline, SocialNetwork, ReachOut } from "../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, TextComponent, GalleryComponent, FooterPictureComponent, PictureComponent, ContainerPictureComponent, RectangleComponent, FooterComponent,  FirstAnimation,  ProgressBarContainerComponent, ProgressBarComponent, SliderContainer, SliderTrack, Slide, scroll  } from "../styles/ComponentStyles";
import ScrollReveal from "../ScrollReveal";

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

const images = [
  '/images/png-javascript-badge-picture-8.png',
  '/images/HTML5.png',
  '/images/CSS3.png',
  '/images/react.png',
  '/images/java_logo.png',
  '/images/c++.svg',
  '/images/vulkan.png',
  '/images/opengl.png',
  '/images/python.png',
];
  const infiniteImages = [...images, ...images];
function AboutMe (props){
  
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
            
            <SectionComponent $height= "30vh" >
            <Link href="../home_page" passHref >
                <FooterComponent>Back to see my others portafolios</FooterComponent> 
            </Link>
                <RectangleComponent>
                    <Head>
                        About me
                    </Head>

                </RectangleComponent>
            
           </SectionComponent>
           
           <FirstAnimation ref={sectionRef} $isVisible={isVisible} style= {{flexDirection: 'row'}}> 
                <SectionComponent flexdirection="row" >
                    <ContainerPictureComponent >
                        <PictureComponent>
                            <Image src="/images/image_bio.jpg"
                                    alt = "picture of me"
                                    fill
                                    style= {styleImage}></Image>
                            
                        </PictureComponent> 
                    </ContainerPictureComponent>
                    <TextComponent  >
                        <HeadPhilosophy>
                            hi!
                        </HeadPhilosophy>
                        <FooterText style={{textAlign: 'right'}}>
                                I'm Sergio. I specialize in Design UI and
                                Graphic Design . Always I love experiment with
                                new forms of artistic expression, such as code.
                                I consider coding as a form to create new
                                pleasant experiences for the user.
                                In my free times you can find me trying to learn
                                guitar and drawing illustrations. I like a good
                                challenge and opportunities to meet diferent
                                connections, so let's connect!
                        </FooterText>
                    </TextComponent>
            </SectionComponent>
           </FirstAnimation>
            <ScrollReveal>
           <SectionComponent $paddingbottom="10%" $height="auto" >
                
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        formation
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                    </FooterText>
                </TextComponent>

                <GalleryComponent $flexdirection="row" >   
                        <PictureComponent $filter="none" $filterbackdrop="none">
                            <Image src="/images/LOGOUMA.jpg"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none">
                            <Image src="/images/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/images/LOGO_STANDFORD.png"
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
                            University of Málaga
                        </Work>
                        <DateWork>
                            2018-2023
                        </DateWork>
                    </FooterPictureComponent>
                    <TextComponent>
                        <Courses>
                            Extense Course of Adobe Illustrator
                        </Courses>
                    </TextComponent>
                    <TextComponent>
                        <Courses>
                            Extense Course of Adobe Indesign
                        </Courses>
                    </TextComponent>
                    <TextComponent>
                        <Courses>
                            Extense Course of Fashion Illustration
                        </Courses>
                    </TextComponent>
                    </TextComponent>

                    <TextComponent>
                    <FooterPictureComponent>
                        <Work>
                            Politechnic University of València
                        </Work>
                        <DateWork>
                            2023-Actuality 
                        </DateWork>
                    </FooterPictureComponent>
                    </TextComponent>
                    <TextComponent>
                    <FooterPictureComponent>
                        <Work>
                            University of Standford
                        </Work>
                        <DateWork>
                            2026
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
                        skills
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                    </FooterText>
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

            <SectionComponent $paddingright="5%"  $paddingleft="5%">
                
            </SectionComponent>
           <ScrollReveal>
                <SectionComponent $height='auto' >
                                       
                                                <HeadPhilosophy style= {{textAlign: 'left'}}>
                                                    leanguages
                                                </HeadPhilosophy>
                                                <GalleryComponent>
                                                        <ContainerPictureComponent style={styleLogoImageLeanguagesGallery}>
                                                            <PictureComponent $filter="none" $filterbackdrop="none" style={styleLogosLeanguages}>
                                                                <Image src="/images/Spanish_flag.svg"
                                                                    alt = "Spanish flag"
                                                                    fill
                                                                    style={styleLogoImageLeanguages}
                                                                    ></Image>
                                                                    </PictureComponent>

                                                            <PictureComponent $filter="none" $filterbackdrop="none" style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent>
                                                                    <ProgressBarComponent progress='100%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                            </PictureComponent>        
                                                        </ContainerPictureComponent>

                                                    <ContainerPictureComponent  style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent $filter="none" $filterbackdrop="none" style={styleLogosLeanguages}>
                                                            <Image src="/images/England_flag.svg"
                                                                alt = "UK flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent>
                                                        <PictureComponent $filter="none" $filterbackdrop="none" style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent>
                                                                    <ProgressBarComponent progress='90%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>    
                                                    </ContainerPictureComponent>

                                                    <ContainerPictureComponent  style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent style={styleLogosLeanguages}>
                                                            <Image src="/images/French_flag.svg"
                                                                alt = "French flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent>
                                                        <PictureComponent style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainerComponent>
                                                                    <ProgressBarComponent progress='40%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>    
                                                    </ContainerPictureComponent>

                                                    <ContainerPictureComponent style={styleLogoImageLeanguagesGallery}>
                                                        <PictureComponent style={styleLogosLeanguages}>
                                                            <Image src="/images/German_flag.svg"
                                                                alt = "German flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </PictureComponent>
                                                        <PictureComponent style={styleLogosLeanguagesProgressBar}>
                                                               <ProgressBarContainerComponent>
                                                                    <ProgressBarComponent progress='20%'></ProgressBarComponent>
                                                                </ProgressBarContainerComponent>
                                                        </PictureComponent>
                                                    </ContainerPictureComponent>
                                                </GalleryComponent>
                                       

                            
                </SectionComponent>
           </ScrollReveal>

            <ScrollReveal>
                <SectionComponent $height= "auto">
                    <TextComponent>
                        <HeadPhilosophy>
                            interests and hobbies
                        </HeadPhilosophy>
                        <FooterText>
                            A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
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
                            <Image src="/images/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </PictureComponent>
                        <PictureComponent $filter="none" $filterbackdrop="none" >
                            <Image src="/images/LOGO_STANDFORD.png"
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