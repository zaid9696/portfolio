import React, {useRef, useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';
import ContentStyles from '../styles/ContentStyles';
import NavStyles from '../styles/NavStyles';
  



const Nav = (props) => {

		const [scrolled, setScrolled] = useState();
		const [menuActive, setMenuActive] = useState(true);
	 const ref = useRef();

  
	 useEffect(() => {

	 		const handleSrcoll = () => {

	 					const heroOffset = ref.current.nextElementSibling.offsetHeight - 68;
	 					const windOffet = window.pageYOffset 
	 					if(windOffet >= heroOffset) {
	 						setScrolled(true)
	 					}else {
	 						setScrolled(false)
	 					}

	 				}
	 			window.addEventListener('scroll', handleSrcoll);
	 			return () => {
	 			  window.removeEventListener('scroll', handleSrcoll);
	 			}

	 }, [])


  return (
    <>
    <NavStyles className={scrolled ? "active" : ''}  ref={ref}>
    	<ContentStyles>
    		<motion.div 
    			initial={{opacity: 0}}
    			animate={{opacity: 1, transition:{delay: 0.3}}}
    		 className="container grid-center">
    			<div className="logo">
    				<Link  to="home"
                   spy={true} 
                   smooth={true} 
                   offset={-100} 
                   duration={1000}>
    					ZAID
    				</Link>
    			</div>
    			<div>
    				<button type="button" className={menuActive ? "menu" : "menu close" } 
    						onClick={() => setMenuActive((prevValue) => !prevValue)}>
    					<span></span>
    					<span></span>
    					<span></span>
    				</button>
    			<motion.ul 
              className={!menuActive ? "menuActive" : ''}
              initial={{y: 0, opacity: 0}}
              animate={{y: !menuActive ? 0 : "-100%", opacity: menuActive ? 0 : 1}}
              transition={{duration: 1.4}}
          >
    				<li>
    					<Link activeClass="activelink" 
    								to="home"
                    spy={true}
                    smooth={true} 
                    offset={-100} 
                    duration={1000}
                    onClick={() => setMenuActive((prevValue) => !prevValue)}
                    >

    						Home
    					</Link>
    				</li>
    				<li>
    					<Link activeClass="activelink" 
    								to="skills"
                    spy={true} 
                    smooth={true} 
                    offset={-100}
                    duration={1000}
                    onClick={() => setMenuActive((prevValue) => !prevValue)}
                     >
    						Skills
    					</Link>
    				</li>
    				<li>
    					<Link 
    							activeClass="activelink"
    							to="portfolio"
                   spy={true} 
                   smooth={true} 
                   offset={-100} 
                   duration={1000}
                   onClick={() => setMenuActive((prevValue) => !prevValue)}
                   >
    						Portfolio
    					</Link>
    				</li>
    				<li>
    					<Link
    							activeClass="activelink"
     							to="contact"
                   spy={true} 
                   smooth={true} 
                   offset={-66} 
                   duration={1000}
                   onClick={() => setMenuActive((prevValue) => !prevValue)}
                    >
    						Contact
    					</Link>
    				</li>
    			</motion.ul>
    			</div>
    		</motion.div>
    	</ContentStyles>
    </NavStyles>
    </>
  )
}



export default Nav;