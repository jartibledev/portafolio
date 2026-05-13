'use client'
import { useEffect , useState, useRef } from 'react';
import { ArticleComponent, FirstAnimation, SectionComponent, RectangleComponent } from "../styles/ComponentStyles";
import { Head, Section, Portafolio, Subtitle, SocialNetwork, Dropline, Date, Contact, Footer, FooterText, FooterSubtitle, Projects, LabelSocialMedia,F    } from "../styles/StylesParagraph.styles"
import Link from 'next/link';

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
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent height="auto">
            
            
            <Link style ={{margin: 'auto', display: 'flex'}} href="../home_page" passHref >
                <RectangleComponent $filter="blur(9px)"  $backdropfilter= "blur(9px)"  $filterhover ="none" $backdropfilterhover="none" >
                    <Head>
                        Start
                    </Head>

                </RectangleComponent>
            </Link>
    
           </SectionComponent>
           </FirstAnimation> 
        </ArticleComponent>
        
    )
}

export default CoverForm;