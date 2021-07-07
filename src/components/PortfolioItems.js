import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import PortfolioItemsStyles from '../styles/PortfolioItemsStyles';
import siteLink from '../images/portfolio/icons/site.svg';
import gitHub from '../images/portfolio/icons/github.svg';


const PortfolioItems = ({value, main}) => {

		const [toggle, setToggle] = useState(false);

		let portfolioData;
		!toggle ? portfolioData = main.slice(0,4) : portfolioData = main;
		
		if(value !== 'all'){
			portfolioData = main.filter( item => item.type === value);
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
    			  	<div className="port-img"><img src={thumbnail} alt={item.name} /></div>
    			  	<h3>{item.name}</h3>
    			  </div>
    			  <div className="info">
    			  	<span>
    			  			<a href={item.link} target="_blank" rel="noreferrer">Link <div className="linkIcon"><img src={siteLink} alt="Link Icon" /></div></a>
    			  	</span>
    			  	<span>
    			  			<a href={item.gitLink} target="_blank" rel="noreferrer">GitHub <div className="gitIcon">
    			  				<img src={gitHub} alt="GitHub Icon" />
    			  			</div>
    			  			</a>
    			  	</span>
    			  </div>
    			  </motion.div>
    			</motion.div>
    			)
    			})
    		}

    		</AnimatePresence>
    	</div>
    		{value === 'all' ? <button className="btn" type="button" onClick={() => setToggle((preValue) => !preValue)}>{!toggle ? "Show All" : "Show Less"}</button> : ''}
    	</PortfolioItemsStyles>
    </>
  )
}

export default PortfolioItems;