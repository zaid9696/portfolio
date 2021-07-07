import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import ContentStyles from '../styles/ContentStyles';
import PortfolioItems from './PortfolioItems';
import bgPort from '../images/portfolio/port-bg.svg';

const PortfolioStyles = styled.div`

	
	background-size: cover;
	position: relative;
	background-image: url(${bgPort});

	h2.title {

		color: var(--main);
	}
	.icons {

		display: flex;
    	justify-content: center;

		button {
			border: none;
    		background-color: unset;
    		margin-left: 38px;
    		cursor: pointer;
    		width: 70px;
    		transition: all 0.3s ease-in-out;
     @media (max-width: 820px) {
     		width: 50px;
     		margin-left: 15px;
     }
     @media (max-width: 500px) {
     		width: 45px;
     		margin-left: 5px;
      }
    		img {
    			box-shadow:box-shadow:1px 1px 2px 1px #0000002b !important;
    		}
    		&.active {
    			border-top: 2px solid;
	    		border-bottom: 2px solid;
	    		color: var(--secondary);
	    		padding-top: 5px;
	    		padding-bottom: 2px;
	    		margin-bottom: -8px;
    		}

    		&.all {

    			font-size: 1.6rem;
			    font-weight: 500;
			    border: 3px solid;
			    border-radius: 48px;
			    width: 60px;
    		 @media (max-width: 820px) {
				    width: 43px;
				    height: 43px;
				    font-size: 1.1rem;
     			}
     		@media (max-width: 500px) {

     			width: 35px;
     			height: 35px;
     			font-size: 0.9rem;

     		}
			    height: 60px;
			    color: var(--main);
			    box-shadow:1px 1px 2px 1px #0000002b;
			    &.active {
			    	color: var(--secondary);
			    }
    		}
		}
	}

`;


const Portfolio = ({main}) => {

		const [value, setValue] = useState('all');

  return (
    <PortfolioStyles id="portfolio">  
    	<h2 className="title">Portfolio</h2>
    <ContentStyles>
    	<div className="grid-center">
    	<div className="icons">
    			<button className={value === 'all' ? "all active" : 'all'} type="button" onClick={() => setValue('all')}>
    			All
    		</button>

    		<button type="button" className={value === 'js' ? "active" : ''} onClick={() => setValue('js')}>
    			<StaticImage src="../images/portfolio/icons/js.svg" alt="Javacript icon"  />
    		</button>

    		<button className={value === 'react' ? "active" : ''} type="button" onClick={() => setValue('react')}>
    			<StaticImage src="../images/portfolio/icons/react.svg" alt="React icon"  />
    		</button>

    		<button className={value === 'next' ? "active" : ''} type="button" onClick={() => setValue('next')}>
    			<StaticImage src="../images/portfolio/icons/next-js.svg" alt="Next Js icon"  />
    		</button>

    		<button className={value === 'wp' ? "active" : ''} type="button" onClick={() => setValue('wp')}>
    			<StaticImage src="../images/portfolio/icons/wordpress.svg" alt="Wordpress icon"  />
    		</button>

    		<button className={value === 'wc' ? "active" : ''} type="button" onClick={() => setValue('wc')}>
    			<StaticImage src="../images/portfolio/icons/woocommerce.svg" alt="Woocommerce icon"  />
    		</button>
    		</div>
    	<PortfolioItems value={value} main={main} />
    	</div>
    	</ContentStyles>
    </PortfolioStyles>
  )
}

export default Portfolio;