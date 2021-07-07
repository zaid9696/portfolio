import React, {useEffect} from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';


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
	    justify-items: center;
	    .icon {
	    	width: 95px;
	    	height: 100px;
     @media (max-width: 550px) {
     		width: 60px;
	    	height: 90px;
     }
	    	display: flex;
		    flex-flow: column-reverse;
		    justify-content: center;
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
    				<StaticImage placeholder="none"  title="Javascript" src="../images/skills/js/javascript.svg"  alt="Javascript Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" title="React" src="../images/skills/js/react.svg"  alt="React Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" title="Next JS" src="../images/skills/js/next-js.svg"  alt="Next JS Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" title="Jquery" src="../images/skills/js/jquery.svg"  alt="Jquery Icon" />
    			</div>
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>CSS</h3>
    		<div className="icons">
    			<div className="icon">
    				<StaticImage placeholder="none" title="CSS" src="../images/skills/css/css.svg"  alt="Css Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" className="shrink" title="Sass" src="../images/skills/css/sass.svg"  alt="Sass Icon" />
    			</div>	
    			<div className="icon">
    				<StaticImage placeholder="none"  title="Bootstrap" src="../images/skills/css/bootstrap.svg"  alt="Bootstrap Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>HTML/Accessibility/SEO</h3>
    		<div className="icons">
    			<div className="icon">
    				<StaticImage placeholder="none" title="HTML" src="../images/skills/html/html.svg"  alt="HTML Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" title="SEO" src="../images/skills/html/SEO.svg"  alt="SEO Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none" title="Accessibility" src="../images/skills/html/accessibility.svg"  alt="Accessibility Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>

    <FadeInWhenVisible>
    	<div className="skill">
    		<h3>Wordpress/PHP</h3>
    		<div className="icons">
    			<div className="icon">
    				<StaticImage placeholder="none" title="Wordpress" src="../images/skills/wp/wordpress.svg"  alt="Wordpress Icon" />
    			</div>	
    			<div className="icon">
    				<StaticImage placeholder="none"  title="Woocommerce" src="../images/skills/wp/woocommerce.svg"  alt="Woocommerce Icon" />
    			</div>
    			<div className="icon">
    				<StaticImage placeholder="none"  title="PHP" src="../images/skills/wp/php.svg"  alt="PHP Icon" />
    			</div>	
    		</div>
    	</div>
    </FadeInWhenVisible>
    </SkillStyles>
  )
}

export default SkillsItems;