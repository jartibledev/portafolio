'use client'
import { useEffect , useState, useRef } from 'react';
import { ArticleComponent, FirstAnimation, SectionComponent, RectangleComponent } from "../../styles/ComponentStyles";
import { Head   } from "../../styles/StylesParagraph.styles"
import {  useParams } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import LanguageSelector from '@/app/styles/LanguageSelector';
import { useIsMobile } from '@/app/styles/useMobile';
import { useIsTouchDevice } from '@/app/styles/useTablet';

function CoverForm (props ){
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
        const locale = useLocale();
        const isMobile = useIsMobile();
        const isTouch = useIsTouchDevice();
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
        setIsMounted(true);
    }, []);
    
        
        
        
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
                const rectProps = isTouch ? {
                    $filter: "none",
                    $backdropfilter: "none",
                    onTouchStart: () => console.log("Acción móvil"),
                    onTouchStart: () => setIsActive(true),
                    onTouchEnd: () => setTimeout(() => setIsActive(false), 1000)
                } : {
                    $filter: "blur(9px)",
                    $backdropfilter: "blur(9px)",
                    $filterhover: "none",
                    $backdropfilter: "none"

                    // Las props de PC
                }; 
    return(
        <ArticleComponent>
            <LanguageSelector></LanguageSelector>
            <FirstAnimation ref={sectionRef} $isVisible={isVisible} >
            <SectionComponent height="auto" style={{justifyContent: 'center'}}>
            
            
            <Link href={`/${currentLocale}/home_page`} prefetch={true}>
                <RectangleComponent 
                    {...rectProps}
                >
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