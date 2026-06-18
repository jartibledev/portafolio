'use client';
import { FooterText, Projects } from './StylesParagraph.styles';
import { TextComponent, ProjectSinopsis } from './ComponentStyles';

export default function ProjectComponent({ children, project="Project Name", explanation = "This text explain the illustration",   ...props }) {
  

  return (
   <ProjectSinopsis {...props} >
                           <TextComponent>
                               <Projects>
                                   {project}
                               </Projects>
                               <FooterText>
                                   {explanation}
                               </FooterText>
                           </TextComponent>
    </ProjectSinopsis>
  );
}