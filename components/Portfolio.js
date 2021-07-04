// import {useState} from 'react';
// import Image from 'next/image';
// import styled from 'styled-components';
// import ContentStyles from '../styles/ContentStyles';
// import PortfolioItems from './PortfolioItems';
// import bgPort from '../assets/images/portfolio/port-bg.svg';
// import jsIcon from '../assets/images/portfolio/icons/js.svg';
// import reactIcon from '../assets/images/portfolio/icons/react.svg';
// import nextIcon from '../assets/images/portfolio/icons/next-js.svg';
// import wpIcon from '../assets/images/portfolio/icons/wordpress.svg';
// import wcIcon from '../assets/images/portfolio/icons/woocommerce.svg';

// const PortfolioStyles = styled.div`

	
// 	background-size: cover;
// 	position: relative;
// 	background-image: url(${bgPort.src});

// 	h2.title {

// 		color: var(--main);
// 	}
// 	.icons {

// 		display: flex;
//     	justify-content: center;

// 		button {
// 			border: none;
//     		background-color: unset;
//     		margin-left: 38px;
//     		cursor: pointer;
//     		transition: all 0.3s ease-in-out;
//      @media (max-width: 820px) {
//      		width: 50px;
//      		margin-left: 15px;
//      }
//      @media (max-width: 500px) {
//      		width: 45px;
//      		margin-left: 5px;
//       }
//     		img {
//     			box-shadow:box-shadow:1px 1px 2px 1px #0000002b !important;
//     		}
//     		&.active {
//     			border-top: 2px solid;
// 	    		border-bottom: 2px solid;
// 	    		color: var(--secondary);
// 	    		padding-top: 5px;
// 	    		padding-bottom: 2px;
// 	    		margin-bottom: -8px;
//     		}

//     		&.all {

//     			font-size: 1.6rem;
// 			    font-weight: 500;
// 			    border: 3px solid;
// 			    border-radius: 48px;
// 			    width: 60px;
//     		 @media (max-width: 820px) {
// 				    width: 43px;
// 				    height: 43px;
// 				    font-size: 1.1rem;
//      			}
//      		@media (max-width: 500px) {

//      			width: 35px;
//      			height: 35px;
//      			font-size: 0.9rem;

//      		}
// 			    height: 60px;
// 			    color: var(--main);
// 			    box-shadow:1px 1px 2px 1px #0000002b;
// 			    &.active {
// 			    	color: var(--secondary);
// 			    }
//     		}
// 		}
// 	}

// `;


// const Portfolio = ({main}) => {

// 		const [value, setValue] = useState('all');

//   return (
//     <PortfolioStyles id="portfolio">  
//     	<h2 className="title">Portfolio</h2>
//     <ContentStyles>
//     	<div className="grid-center">
//     	<div className="icons">
//     			<button className={value == 'all' ? "all active" : 'all'} type="button" onClick={() => setValue('all')}>
//     			All
//     		</button>

//     		<button type="button" className={value == 'js' ? "active" : ''} onClick={() => setValue('js')}>
//     			<Image src={jsIcon} alt="Javacript icon" width={60} height={60} />
//     		</button>

//     		<button className={value == 'react' ? "active" : ''} type="button" onClick={() => setValue('react')}>
//     			<Image src={reactIcon} alt="React icon" width={60} height={60} />
//     		</button>

//     		<button className={value == 'next' ? "active" : ''} type="button" onClick={() => setValue('next')}>
//     			<Image src={nextIcon} alt="Next Js icon" width={60} height={60} />
//     		</button>

//     		<button className={value == 'wp' ? "active" : ''} type="button" onClick={() => setValue('wp')}>
//     			<Image src={wpIcon} alt="Wordpress icon" width={60} height={60} />
//     		</button>

//     		<button className={value == 'wc' ? "active" : ''} type="button" onClick={() => setValue('wc')}>
//     			<Image src={wcIcon} alt="Woocommerce icon" width={60} height={60} />
//     		</button>
//     		</div>
//     	<PortfolioItems value={value} main={main} />
//     	</div>
//     	</ContentStyles>
//     </PortfolioStyles>
//   )
// }

// export default Portfolio;