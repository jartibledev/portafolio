import React from "react";
import { ButtonStar, App, ButtonPortafolio, BlankSpace, HeadPortafolio, FooterStyles  } from "../styles/stylesStroke"
import { Head, Section, Portafolio, Subtitle, SocialNetwork, Dropline, Date, Contact, Footer, FooterText, FooterSubtitle, Projects, LabelSocialMedia,F    } from "../styles/StylesParagraph.styles"
import FooterForm from "../footer";
import Link from 'next/link';
import HomePageForm from "../home_page/page";

function CoverForm (props){
    return(
        <article>
            <Link href="../home_page" passHref >
                <ButtonStar>
                    <Head>
                        About me
                    </Head>

                </ButtonStar>
            </Link>
           
        </article>
        
    )
}

export default CoverForm;