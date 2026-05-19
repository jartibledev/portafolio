'use client'
import React, { useEffect, useState, useRef} from "react";
import { Portafolio, Section } from "../../styles/StylesParagraph.styles";
import { ArticleComponent, SectionComponent, RectangleComponent, BlankSpaceComponent} from "../../styles/ComponentStyles";
import Link from "next/link";
import { useParams } from 'next/navigation';

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
            
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_illustration`} prefetch={true}>
                    <RectangleComponent $filter="blur(9px)" $filterbackdrop="blur(9px)" $filterhover="none" $backfilterhoover="none" >
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
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_dev`} prefetch={true}>
                    <RectangleComponent $filter="blur(9px)" $filterbackdrop="blur(9px)" $filterhover="none" $backfilterhoover="none">
                        
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
               
                <Link style = {linkDisplay} href={`/${currentLocale}/portafolio_design`} prefetch={true}>
                    <RectangleComponent $filter="blur(9px)" $filterbackdrop="blur(9px)" $filterhover="none" $backfilterhoover="none">
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