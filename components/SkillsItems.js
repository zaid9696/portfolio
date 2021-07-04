import {useEffect} from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';

import jsIcon from '../assets/images/skills/js/javascript.svg';
import reactIcon from '../assets/images/skills/js/react.svg';
import nextIcon from '../assets/images/skills/js/next-js.svg'; 
import jqIcon from '../assets/images/skills/js/jquery.svg';

import cssIcon from '../assets/images/skills/css/css.svg';
import sassIcon from '../assets/images/skills/css/sass.svg';
import bsIcon from '../assets/images/skills/css/bootstrap.svg';

import htmlIcon from '../assets/images/skills/html/html.svg';
import accIcon from '../assets/images/skills/html/accessibility.svg';
import seoIcon from '../assets/images/skills/html/SEO.svg';

import wpIcon from '../assets/images/skills/wp/wordpress.svg';
import wooIcon from '../assets/images/skills/wp/woocommerce.svg';
import phpIcon from '../assets/images/skills/wp/php.svg';


const SkillStyles = styled.div`


	display: grid;
    grid-template-columns: 1fr 1fr;
     @media (max-width: 960px) {

    		grid-template-columns: 1fr;

      }
    gap: 4rem;
	
	.skill{
		background-color: #010c2dcf;
		box-shadow: 2px 2px 7px 0px #000000ad;
		text-align: center;
		padding-bottom: 2rem;
		padding-top: 1rem;
		border-radius: 5px;
		h3 {
				color: #fff;
		    letter-spacing: 1.5px;
		    font-size: 2rem;
     @media (max-width: 550px) {
     		font-size: 1.2rem;
     }
			}

		}
	}

	.icons {
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    gap: 2rem;
	    .shrink{
	    	min-width: 120px !important;
	    	&.bootstrap{min-width: 80px !important}
     	@media (max-width: 550px) {
	    	min-width: 95px !important;
     	}
	    }
	    div:last-child {
	    	grid-column: 1 / -1;
	    }

     @media (max-width: 550px) {
     		&:not(first-child){
     			gap: 1rem;
     		}
     }

	}

	.icons.full-grid{
		gap: 2rem;
		div:last-child{
			grid-column: auto;
		}
	}



`;

const FadeInWhenVisible = ({children}) => {

		const controls = useAnimation();
		const [ref, inView] = useInView();

		useEffect(() => {

			if(inView){

				controls.start("visible");
			}

		}, [controls, inView]);

		return (

				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					transition={{
						duration: 1.2
					}}
					variants={{
						visible: {opacity: 1, y: 0, scale: 1},
						hidden: {opacity: 0, y: 300, scale: 0.8}
					}}
				>
				{children}	
				</motion.div>

			)

}


const SkillsItems = (props) => {
  return (
    <SkillStyles>
    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>Javascript</h3>
    		<div className="icons full-grid">
    			<div className="icon">
    				<Image  title="Javascript" src={jsIcon} width={100} height={100} alt="Javascript Icon" />
    			</div>
    			<div className="icon">
    				<Image title="React" src={reactIcon} width={100} height={100} alt="React Icon" />
    			</div>
    			<div className="icon">
    				<Image title="Next JS" src={nextIcon} width={100} height={100} alt="Next JS Icon" />
    			</div>
    			<div className="icon">
    				<Image title="Jquery" src={jqIcon} width={100} height={100} alt="Jquery Icon" />
    			</div>
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>CSS</h3>
    		<div className="icons">
    			<div className="icon">
    				<Image title="CSS" src={cssIcon} width={100} height={100} alt="Css Icon" />
    			</div>
    			<div className="icon">
    				<Image className="shrink" title="Sass" src={sassIcon} width={100} height={100} alt="Sass Icon" />
    			</div>	
    			<div className="icon">
    				<Image className="shrink bootstrap" title="Bootstrap" src={bsIcon} width={100} height={100} alt="Bootstrap Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>HTML/Accessibility/SEO</h3>
    		<div className="icons">
    			<div className="icon">
    				<Image title="HTML" src={htmlIcon} width={100} height={100} alt="HTML Icon" />
    			</div>
    			<div className="icon">
    				<Image title="SEO" src={seoIcon} width={100} height={100} alt="SEO Icon" />
    			</div>
    			<div className="icon">
    				<Image title="Accessibility" src={accIcon} width={100} height={100} alt="Accessibility Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>Wordpress/PHP</h3>
    		<div className="icons">
    			<div className="icon">
    				<Image title="Wordpress" src={wpIcon} width={100} height={100} alt="Wordpress Icon" />
    			</div>	
    			<div className="icon">
    				<Image  title="Woocommerce" src={wooIcon} width={100} height={100} alt="Woocommerce Icon" />
    			</div>
    			<div className="icon">
    				<Image  title="PHP" src={phpIcon} width={100} height={100} alt="PHP Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>
    </SkillStyles>
  )
}

export default SkillsItems;