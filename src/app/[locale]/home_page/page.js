'use client'
import React, { useEffect, useState, useRef} from "react";
import { Portafolio, Section } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, RectangleComponent, BlankSpaceComponent} from "../../styles/ComponentStyles";
import Link from "next/link";
import { useParams } from 'next/navigation';
import LanguageSelector from "@/app/styles/LanguageSelector";
import { useIsTouchDevice } from "@/app/styles/useTablet";
const linkDisplay = { 
    display:"flex", 
    justifyContent: "center",
    paddingBottom: "5%"
}
  const stylesHomePage = {
                height: "auto",
                margin: "10vh"

            }
function HomePageForm (props){
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
    useEffect(() => {
        setIsMounted(true);
    }, []);

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
            <SectionComponent style={stylesHomePage} >
                <LanguageSelector></LanguageSelector>

                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_dev`} prefetch={true}>
                    <RectangleComponent {...rectProps} >
                        <Portafolio>
                            Portafolio
                        </Portafolio>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <Section>
                            dev
                        </Section>
                    </RectangleComponent>
                </Link>
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_design`} prefetch={true}>
                    <RectangleComponent {...rectProps}>
                        
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <Portafolio>
                            Portafolio
                        </Portafolio>
                        <Section>
                            design
                        </Section>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        
                    </RectangleComponent>
                </Link>    
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_illustration`} prefetch={true}>
                    <RectangleComponent {...rectProps}>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <Portafolio>
                            Portafolio
                        </Portafolio>
                        <Section>
                            illustration
                        </Section>
                        <BlankSpaceComponent></BlankSpaceComponent>
                        <BlankSpaceComponent></BlankSpaceComponent>
                    </RectangleComponent>
                </Link>
   
            </SectionComponent>
        </ArticleComponent>
        
        
    )
}

export default HomePageForm;