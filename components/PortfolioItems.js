import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import PortfolioItemsStyles from '../styles/PortfolioItemsStyles';

import js1 from '../assets/images/portfolio/js-1.png';
import react1 from '../assets/images/portfolio/react-1.png';
import react2 from '../assets/images/portfolio/react-2.png';
import next1 from '../assets/images/portfolio/next-1.png';
import wp1 from '../assets/images/portfolio/wp-1.png';
import wp2 from '../assets/images/portfolio/wp-2.png';
import wp3 from '../assets/images/portfolio/wp-3.png';
import wp4 from '../assets/images/portfolio/wp-4.png';
import wc1 from '../assets/images/portfolio/wc-1.png';

import siteLink from '../assets/images/portfolio/icons/site.svg';
import gitHub from '../assets/images/portfolio/icons/github.svg';


const PortfolioItems = ({value, main}) => {

		const [toggle, setToggle] = useState(false);

		let portfolioData;
		!toggle ? portfolioData = main.slice(0,4) : portfolioData = main;
		
		if(value !== 'all'){
			portfolioData = main.filter( item => item.type == value);
		}

  return (
    <>

    	<PortfolioItemsStyles>
    	<div className="portfolios">
    		<AnimatePresence>
    			
    		{
    		portfolioData.map(item => {

    	    const thumbnail = item.thumbnail;
    		return (
    			<motion.div 

    				intial={{opacity: 0, y: 22}} 
						animate={{opacity: 1, y: 0}} 
						exit={{opacity: 0, y: -22}}
						transition={{duration: 0.8}}
    			 className="portfolio" key={item.id}>
    			 <motion.div>
    			  <div className="overlay">
    			  	<Image placeholder="blur" src={thumbnail} alt={item.name} width={800} height={400}  />
    			  	<h3>{item.name}</h3>
    			  </div>
    			  <div className="info">
    			  	<span>
    			  		<Link href={item.link} passHref >
    			  			<a target="_blank">Link <div className="linkIcon"><Image src={siteLink} alt="Link Icon" /></div></a>
    			  		</Link>
    			  	</span>
    			  	<span>
    			  		<Link href={item.gitLink} passHref>
    			  			<a target="_blank">GitHub <div className="gitIcon">
    			  				<Image src={gitHub} alt="GitHub Icon" />
    			  			</div></a>
    			  		</Link>
    			  	</span>
    			  </div>
    			  </motion.div>
    			</motion.div>
    			)
    			})
    		}

    		</AnimatePresence>
    	</div>
    		{value == 'all' ? <button className="btn" type="button" onClick={() => setToggle((preValue) => !preValue)}>{!toggle ? "Show All" : "Show Less"}</button> : ''}
    	</PortfolioItemsStyles>
    </>
  )
}

export default PortfolioItems;