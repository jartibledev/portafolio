'use client'
import React, { useEffect, useState, useRef} from "react";
import { ButtonStar, App, ButtonPortafolio, BlankSpace, HeadPortafolio, FooterStyles, ArticleStyles, SectionStyles  } from "../styles/stylesStroke"
import { Head, Section, Portafolio, Subtitle, SocialNetwork, Dropline, Date, Contact, Footer, FooterText, FooterSubtitle, Projects, LabelSocialMedia,F    } from "../styles/StylesParagraph.styles"
import FooterForm from "../footer";
import Link from 'next/link';
import HomePageForm from "../home_page/page";

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
            <SectionStyles>
            <Link href="../home_page" passHref >
                <ButtonStar>
                    <Head>
                        About me
                    </Head>

                </ButtonStar>
            </Link>
           </SectionStyles>
        </ArticleStyles>
        
    )
}

export default CoverForm;