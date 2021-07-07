import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import ContentStyles from '../styles/ContentStyles';


const FooterStyles = styled.footer`

	background-image: linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% );
	// padding:2rem 0rem;

	.footer {
			display: flex;
    	justify-content: space-between;
    	padding-top: 1.4rem;
      @media (max-width: 550px) {
      	padding-top: 1rem;
    	}
    	.img {
    		width: 40px;
    		margin-left: 1.5rem;
      	@media (max-width: 550px) {
      		width:20px;
      		margin-left: 1rem;
      	}

    	}

    	.info {
    		display: flex;
    	}

    	.copyright {

    		display: flex;
		    align-items: center;
		    margin-bottom: 10px;
		    font-size: 1.1rem;
      @media (max-width: 550px) {
      		font-size: 0.7rem;
      }
		    text-transform: capitalize;
		    color: var(--main);
		    font-weight: 100;
    	}
	}

`;

const Footer = (props) => {
  return (

    <FooterStyles>
    	<ContentStyles>
    		<div className='grid-center'>
    			<div className="footer">
    				<div className="copyright">All Rights &copy; reserved to Zaid</div>
    				<div className="info">
    						<a href="mailto:zaidinquiry96@gmail.com" rel="noreferrer"><div className="img"><StaticImage src="../images/footer/email.svg" alt="Email Icon"/></div>
    						</a>
  
    						<a href="https://github.com/zaid9696/" target="_blank" rel="noreferrer"><div className="img"><StaticImage src='../images/footer/github.svg' alt="Github Icon"/></div>
    						</a>
    		
    						<a href="https://www.linkedin.com/in/zaid-ahmed-a33719121/" target="_blank" rel="noreferrer"><div className="img"><StaticImage src="../images/footer/linkedin.svg" alt="Linkedin Icon"/></div>
    						</a>
    			
    					
    						<a href="https://twitter.com/zaiddev96" target="_blank" rel="noreferrer"><div className="img"><StaticImage src="../images/footer/twitter.svg" alt="Twitter Icon"/></div>
    						</a>
    				</div>
    			</div>
    		</div>
    	</ContentStyles>
    </FooterStyles>
  )
}

export default Footer;