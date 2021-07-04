import Image from 'next/image';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';
import shape1 from '../assets/images/hero/shape-1.svg';
import shape2 from '../assets/images/hero/shape-2.svg';
import shape3 from '../assets/images/hero/shape-3.svg';
import shape4 from '../assets/images/hero/shape-4.svg';
import ContentStyles from '../styles/ContentStyles';
import HeroStyles from '../styles/HeroStyles';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
  },
  hidden: {
    opacity: 0,
     transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -600 },
  visible: { opacity: 1, y: 0, transition:{duration: 1.2} }
}


const shapes = {

    visible: {
      opacity:1,
      transition: {
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
    },
    hidden: {
      opacity: 0,
      transition: {
      when: "afterChildren",
    },
    }
}

const shapeItem = {

    visible: {
      y: 10,
      transition: {
        duration: 2.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },

    hidden: {
      y: -2,
    }
}

const Hero = (props) => {

  
  return (

    <HeroStyles id="home">
    	<ContentStyles>
       <div className="grid-center">

         <motion.div 
          initial="hidden"
          animate="visible"
          variants={list} 
          className="banners">
           <motion.div variants={item} className="banner">
           </motion.div>
           <motion.div variants={item} className="banner">
           </motion.div>
           <motion.div variants={item} className="banner">
           </motion.div>
         </motion.div>

        <div className="content">
            <motion.h1 
            initial={{opacity: 0}} 
          animate={{opacity: 1, transition:{delay: 0.5}}}>
          Hi, I'm <span>Zaid.</span> <br /> I Develop, and Design Websites.</motion.h1>
                  <motion.button 
                  initial={{opacity: 0}} 
                  animate={{opacity: 1, transition:{delay: 1}}}
                  type="type">
                      <Link
                      to="contact"
                      spy={true} 
                      smooth={true} 
                      offset={-66}
                      duration={1000}>Contact Me</Link>
                  </motion.button>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={shapes}
            className="shape-icons">
                 <motion.div 
                  variants={shapeItem}
                  className="shape">
                   <Image src={shape1} width={110} height={110} alt="shape icon" />
                 </motion.div> 
                  <motion.div  
                  variants={shapeItem}
                  className="shape">
                   <Image src={shape2} width={110} height={110} alt="shape icon" />
                 </motion.div> 
                  <motion.div
                   variants={shapeItem}
                   className="shape">
                   <Image src={shape3} width={110} height={110} alt="shape icon" />
                 </motion.div> 
                  <motion.div 
                  variants={shapeItem}
                  className="shape">
                   <Image src={shape4} width={110} height={110} alt="shape icon" />
                 </motion.div> 
            </motion.div>
        </div>

       </div> 
      </ContentStyles>
    </HeroStyles>
  )
}

export default Hero;