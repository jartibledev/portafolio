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
                height: "100vh",
                margin: "5%",
                justifyContent: 'center'

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
            const dimensions = {
                width: '300px',
                height: '150px'
            }

    return(
        <ArticleComponent>
            <SectionComponent style={stylesHomePage} >
                <LanguageSelector></LanguageSelector>

                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_dev`} prefetch={true}>
                    <RectangleComponent {...rectProps} style={dimensions} >
                        <Portafolio style={{gridColumn: '1', gridRow: '1', justifySelf: 'start', alignSelf: 'bottom',  margin: '5%'}}>
                            Portafolio
                        </Portafolio>
                        <Section style={{gridColumn: '2', gridRow: '2', justifySelf: 'end', alignSelf: 'bottom'}}>
                            dev
                        </Section>
                    </RectangleComponent>
                </Link>
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_design`} prefetch={true}>
                    <RectangleComponent {...rectProps} style={dimensions}>
                        
                        
                        <Portafolio style={{gridColumn: '2', gridRow: '2', justifySelf: 'end', alignSelf: 'bottom', margin: '5%'}}>
                            Portafolio
                        </Portafolio>
                        <Section style={{gridColumn: '1', gridRow: '1', justifySelf: 'start', alignSelf: 'bottom'}}>
                            design
                        </Section>
            
                        
                    </RectangleComponent>
                </Link>    
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_illustration`} prefetch={true}>
                    <RectangleComponent {...rectProps} style={dimensions}>
                        <Portafolio style={{gridColumn: '1', gridRow: '1', justifySelf: 'start', alignSelf: 'bottom', margin: '5%'}} >
                            Portafolio
                        </Portafolio>
                        <Section style={{gridColumn: '1', gridRow: '2', justifySelf: 'end', alignSelf: 'bottom', fontSize: '2rem'}}>
                            illustration
                        </Section>
                    </RectangleComponent>
                </Link>
   
            </SectionComponent>
        </ArticleComponent>
        
        
    )
}

export default HomePageForm;