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
  const infiniteImages = [...logos, ...logos];
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
            <SectionComponent>
                <Link href="../home_page" passHref >
                <FooterComponent>Back to see my others portafolios</FooterComponent> 
            </Link>
                <RectangleComponent $filter="none"  $backdropfilter= "none"  $filterhover ="blur(9px)" $backdropfilterhover="blur(9px)">
                    <Head>
                        About me
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
                    </SectionComponent>
                </FirstAnimation>
                <ScrollReveal>
                    <SectionComponent>
                        <TextComponent  >
                            <HeadPhilosophy>
                                Project Name
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
                </ScrollReveal>           
           <SectionComponent>
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        The problem
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
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
            </SectionComponent> 
           <SectionComponent>
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        The solution
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
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
            </SectionComponent> 
           <SectionComponent>
                <TextComponent >
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        The results
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
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
            </SectionComponent> 
           
        </ArticleComponent>
        
    )
}

export default AboutMe;