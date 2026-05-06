'use client'
import React, { useEffect, useState, useRef} from "react";
import {  HeadPortafolio,  ArticleStyles,  HeroStyles, Parraph, ContainerPictureAboutMeBlur, SectionAboutMeStyles, IntroSectionAboutMeStyles, ContainerPictureAboutMe, GalleryAboutMeStyles, FooterPicture  } from "../styles/stylesStroke"
import { Head, FooterText, HeadPhilosophy, Work, DateFooter, Courses    } from "../styles/StylesParagraph.styles"
import FooterForm from "../footer";
import Link from 'next/link';
import Image from "next/image";
import HomePageForm from "../home_page/page";

const styleImage ={
    objectFit: 'cover',
    objectPosition: ' center',
      
}
const styleLogos ={
    objectFit: 'contain',
    objectPosition: ' center',
    width: "200px"
   
      
}
function CoverForm (props){
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
                        threshold: 0.05,
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
        <ArticleStyles>
            <HeroStyles >
            <Link href="../home_page" passHref >
                <button>Back to hompe page</button>
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
                
           <SectionAboutMeStyles ref={sectionRef} $isVisible={isVisible} >
                
                <Parraph>
                    <HeadPhilosophy style={{textAlign: 'left'}}>
                        formation
                    </HeadPhilosophy>
                    <FooterText>
                        A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.
                    </FooterText>
                </Parraph>

                <GalleryAboutMeStyles  >   
                    
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
                    <FooterPicture>
                        <Work>
                            University of Málaga
                        </Work>
                        <DateFooter>
                            2018-2023
                        </DateFooter>
                    </FooterPicture>
                    <FooterPicture>
                        <Courses>
                            Extense Course of Adobe Illustrator
                        </Courses>
                    </FooterPicture>
                    <FooterPicture>
                        <Courses>
                            Extense Course of Adobe Indesign
                        </Courses>
                    </FooterPicture>
                    <FooterPicture>
                        <Courses>
                            Extense Course of Fashion Illustration
                        </Courses>
                    </FooterPicture>
                    
                    <FooterPicture>
                        <Work>
                            Politechnic University of València
                        </Work>
                        <DateFooter>
                            2023-Actuality 
                        </DateFooter>
                    </FooterPicture>
                    <FooterPicture>
                        <Work>
                            University of Standford
                        </Work>
                        <DateFooter>
                            2026
                        </DateFooter>
                    </FooterPicture>
                </Parraph>
           </SectionAboutMeStyles>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
           <SectionAboutMeStyles>

           </SectionAboutMeStyles>
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