import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import ContentStyles from '../styles/ContentStyles';

import email from '../assets/images/footer/email.svg';
import github from '../assets/images/footer/github.svg';
import linkedin from '../assets/images/footer/linkedin.svg';
import twitter from '../assets/images/footer/twitter.svg';

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
    					<Link href="mailto:zaidinquiry96@gmail.com">
    						<a><div className="img"><Image src={email} alt="Email Icon"/></div></a>
    					</Link>
    					<Link href="https://github.com/zaid9696/">
    						<a target="_blank"><div className="img"><Image src={github} alt="Github Icon"/></div></a>
    					</Link>
    					<Link href="https://www.linkedin.com/in/zaid-ahmed-a33719121/" >
    						<a target="_blank"><div className="img"><Image src={linkedin} alt="Linkedin Icon"/></div></a>
    					</Link>
    					<Link href="https://twitter.com/zaiddev96">
    						<a target="_blank"><div className="img"><Image src={twitter} alt="Twitter Icon"/></div></a>
    					</Link>
    				</div>
    			</div>
    		</div>
    	</ContentStyles>
    </FooterStyles>
  )
}

export default Footer;