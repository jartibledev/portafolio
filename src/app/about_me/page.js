'use client'
import React, { useEffect, useState, useRef} from "react";
import {  HeadPortafolio,  ArticleStyles,  HeroStyles, Parraph, ContainerPictureAboutMeBlur, SectionAboutMeStyles, IntroSectionAboutMeStyles, ContainerPictureAboutMe, GalleryAboutMeStyles, WorkNameAndDate, CourseSection, WorkSection, SliderContainer, SliderTrack, Slide, AlbumImages, ProgressBarContainer, ProgressBar  } from "../styles/stylesStroke"
import { Head, FooterText, HeadPhilosophy, Work, DateWork, Courses    } from "../styles/StylesParagraph.styles"
import Link from 'next/link';
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { GalleryComponent } from "../styles/ComponentStyles";

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
    width: '25%'
      
}
const styleLogosLeanguagesProgressBar ={
    objectFit: 'contain',
    objectPosition: ' center',
    width:'100%',
    justifyContent: 'center', /* Centrado horizontal */
  alignItems: 'center'
      
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
    height: '2vh',
    marginBottom: ' 20%'
      
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

function CoverForm (props){
    const infiniteImages = [...images, ...images];
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
                        threshold: 0.01,
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
        <ArticleStyles>
            
            <HeroStyles >
                <GalleryComponent width='100%'>

            </GalleryComponent>
            <Link href="../home_page" passHref >
                <FooterText>Back to see my others portafolios</FooterText> 
            </Link>
                <HeadPortafolio>
                    <Head>
                        About me
                    </Head>

                </HeadPortafolio>
            
           </HeroStyles>
            
           <IntroSectionAboutMeStyles style= {{flexDirection: 'row'}}>
            <GalleryAboutMeStyles >
            <ContainerPictureAboutMeBlur>
                <Image src="/images/image_bio.jpg"
                        alt = "picture of me"
                        fill
                        style= {styleImage}></Image>
                
            </ContainerPictureAboutMeBlur> 
            </GalleryAboutMeStyles>
                <Parraph  >
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
                </Parraph>
           
           </IntroSectionAboutMeStyles>
            <ScrollReveal direction="right" delay="0.2s">
           <SectionAboutMeStyles ref={sectionRef} $isVisible={isVisible} $direction="right" $delay="4s" >
                
                <Parraph>
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        formation
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                    </FooterText>
                </Parraph>

                <GalleryAboutMeStyles >   
                        <ContainerPictureAboutMe >
                            <Image src="/images/LOGOUMA.jpg"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>
                        <ContainerPictureAboutMe >
                            <Image src="/images/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>
                        <ContainerPictureAboutMe >
                            <Image src="/images/LOGO_STANDFORD.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>

                    
                </GalleryAboutMeStyles>
                <Parraph >
                    <WorkSection>
                    <WorkNameAndDate>
                        <Work>
                            University of Málaga
                        </Work>
                        <DateWork>
                            2018-2023
                        </DateWork>
                    </WorkNameAndDate>
                    <CourseSection>
                        <Courses>
                            Extense Course of Adobe Illustrator
                        </Courses>
                    </CourseSection>
                    <CourseSection>
                        <Courses>
                            Extense Course of Adobe Indesign
                        </Courses>
                    </CourseSection>
                    <CourseSection>
                        <Courses>
                            Extense Course of Fashion Illustration
                        </Courses>
                    </CourseSection>
                    </WorkSection>

                    <WorkSection>
                    <WorkNameAndDate>
                        <Work>
                            Politechnic University of València
                        </Work>
                        <DateWork>
                            2023-Actuality 
                        </DateWork>
                    </WorkNameAndDate>
                    </WorkSection>
                    <WorkSection>
                    <WorkNameAndDate>
                        <Work>
                            University of Standford
                        </Work>
                        <DateWork>
                            2026
                        </DateWork>
                    </WorkNameAndDate>
                </WorkSection>    
                </Parraph>
           </SectionAboutMeStyles>
           </ScrollReveal>
           <ScrollReveal direction="right" delay="0.2s">    
           <SectionAboutMeStyles >
                <Parraph>
                    <HeadPhilosophy style={{textAlign: 'right'}}>
                        skills
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                    </FooterText>
                </Parraph>
                <ScrollReveal  direction="right" delay="0.5s">
                    <SliderContainer>
                        <SliderTrack>
                            {infiniteImages.map((src, index) => (
                                    <Slide key={index}>
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
                </ScrollReveal>

           </SectionAboutMeStyles>
           </ScrollReveal>

           <ScrollReveal>
                <SectionAboutMeStyles >
                                        <Parraph>
                                                <HeadPhilosophy style= {{textAlign: 'left'}}>
                                                    leanguages
                                                </HeadPhilosophy>
                                                <AlbumImages style ={{width: '100%'}}>
                                                        <GalleryAboutMeStyles style={styleLogoImageLeanguagesGallery}>
                                                            <ContainerPictureAboutMe style={styleLogosLeanguages}>
                                                                <Image src="/images/Spanish_flag.svg"
                                                                    alt = "Spanish flag"
                                                                    fill
                                                                    style={styleLogoImageLeanguages}
                                                                    ></Image>
                                                                    </ContainerPictureAboutMe>

                                                            <ContainerPictureAboutMe style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainer>
                                                                    <ProgressBar progress='100%'></ProgressBar>
                                                                </ProgressBarContainer>
                                                            </ContainerPictureAboutMe>        
                                                        </GalleryAboutMeStyles>

                                                    <GalleryAboutMeStyles  style={styleLogoImageLeanguagesGallery}>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguages}>
                                                            <Image src="/images/England_flag.svg"
                                                                alt = "UK flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </ContainerPictureAboutMe>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainer>
                                                                    <ProgressBar progress='90%'></ProgressBar>
                                                                </ProgressBarContainer>
                                                        </ContainerPictureAboutMe>    
                                                    </GalleryAboutMeStyles>

                                                    <GalleryAboutMeStyles  style={styleLogoImageLeanguagesGallery}>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguages}>
                                                            <Image src="/images/French_flag.svg"
                                                                alt = "French flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </ContainerPictureAboutMe>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguagesProgressBar}>
                                                                <ProgressBarContainer>
                                                                    <ProgressBar progress='40%'></ProgressBar>
                                                                </ProgressBarContainer>
                                                        </ContainerPictureAboutMe>    
                                                    </GalleryAboutMeStyles>

                                                    <GalleryAboutMeStyles>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguages}>
                                                            <Image src="/images/German_flag.svg"
                                                                alt = "German flag"
                                                                fill
                                                                style={styleLogoImageLeanguages}
                                                                ></Image>
                                                        </ContainerPictureAboutMe>
                                                        <ContainerPictureAboutMe style={styleLogosLeanguagesProgressBar}>
                                                               <ProgressBarContainer>
                                                                    <ProgressBar progress='20%'></ProgressBar>
                                                                </ProgressBarContainer>
                                                        </ContainerPictureAboutMe>
                                                    </GalleryAboutMeStyles>
                                                </AlbumImages>
                                        </Parraph>

                            
                </SectionAboutMeStyles>
           </ScrollReveal>

            <ScrollReveal>
                <SectionAboutMeStyles>
                    <Parraph>
                        <HeadPhilosophy>
                            interests and hobbies
                        </HeadPhilosophy>
                        <FooterText>
                            A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                        </FooterText>
                    </Parraph>
                    <GalleryAboutMeStyles >   
                    
                        <ContainerPictureAboutMe >
                            <Image src="/images/LOGOUMA.jpg"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>
                        <ContainerPictureAboutMe >
                            <Image src="/images/UPV-Emblem.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>
                        <ContainerPictureAboutMe >
                            <Image src="/images/LOGO_STANDFORD.png"
                            alt = "picture of me"
                            fill
                            style={styleImage}
                            ></Image>
                        </ContainerPictureAboutMe>

                    
                </GalleryAboutMeStyles>
                </SectionAboutMeStyles>
           </ScrollReveal>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
        </ArticleStyles>
        
    )
}

export default CoverForm;