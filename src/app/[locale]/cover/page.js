'use client'
import { useEffect , useState, useRef } from 'react';
import { ArticleComponent, FirstAnimation, SectionComponent, RectangleComponent } from "../../styles/ComponentStyles";
import { Head   } from "../../styles/StylesParagraph.styles"
import {  useParams } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';

function CoverForm (props ){
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
        const locale = useLocale();
console.log("El idioma activo según next-intl es:", locale);
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
                const params = useParams();
                const currentLocale = params?.locale || 'es';
    return(
        <ArticleComponent>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible}>
            <SectionComponent height="auto">
            
            
            <Link href={`/${currentLocale}/home_page`} prefetch={true}>
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