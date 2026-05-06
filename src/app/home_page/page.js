'use client'
import React, { useEffect, useState, useRef} from "react";
import { Footer, Portafolio, Section } from "../styles/StylesParagraph.styles";
import { BlankSpace, ButtonPortafolio, sectionStyles, ArticleStyles, SectionStyles, IntroStyles } from "../styles/stylesStroke";
import Link from "next/link";
const linkDisplay = { 
    display:"flex", 
    justifyContent: "center"
}

function HomePageForm (props){
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
        <ArticleStyles>
            <IntroStyles ref={sectionRef} $isVisible={isVisible}>
            <Link style = {linkDisplay} href="..\portafolio_dev" passHref>
                <ButtonPortafolio>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Section>
                        dev
                    </Section>
                </ButtonPortafolio>
            </Link>
            
            <Link style = {linkDisplay} href="..\portafolio_design" passHref>
                <ButtonPortafolio>
                    
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        design
                    </Section>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    
                </ButtonPortafolio>
            </Link>
            
            
          
            <Link style = {linkDisplay} href="..\portafolio_illustration" passHref>
                <ButtonPortafolio>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                    <Portafolio>
                        Portafolio
                    </Portafolio>
                    <Section>
                        illustration
                    </Section>
                    <BlankSpace></BlankSpace>
                    <BlankSpace></BlankSpace>
                </ButtonPortafolio>
            </Link>
            </IntroStyles>
         </ArticleStyles>
        
        
    )
}

export default HomePageForm;