'use client';
import { FooterText, Projects } from './StylesParagraph.styles';
import { TextComponent, ProjectSinopsis } from './ComponentStyles';
import { useIsTouchDevice } from './useTablet';

export default function ProjectComponent({ children, project="Project Name", explanation = "This text explain the illustration",    ...props }) {
    const isTouch = useIsTouchDevice();
    const title = isTouch ? {
    color: "white"        
            } : {
    color: "black"
        }; 
  const text = isTouch ? {
    color: "#c7c7c7"        
            } : {
    color: "#686868"
        }; 

    return (
   <ProjectSinopsis {...props} >
                           <TextComponent>
                               <Projects style={title}>
                                   {project}
                               </Projects>
                               <FooterText style={text}>
                                   {explanation}
                               </FooterText>
                           </TextComponent>
    </ProjectSinopsis>
  );
}