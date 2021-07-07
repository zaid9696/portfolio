import React from 'react'
import {Helmet} from 'react-helmet';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({children}) => {


  return (
   					
   		<>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta  charSet='utf-8'/> 
        <meta name="theme-color" content="#010C2D" />
        <title>Zaid | Freelance Front-end Developer & Web Designer</title>
       <meta name="description" content="I design & develop websites and I can make a custom Wordpress theme. I am available for hiring " />
       <meta name="keywords" content="Html, Css, Javascript, React, Next JS, Wordpress, Woocommerce, Web Developer, Web Designer" />
       <meta property="og:type" content="website" />
       <meta property="og:description" content="I design & develop websites and I can make a custom Wordpress theme. I am available for hiring" />
       <meta property="og:image" content="../images/defaultImage.png"/>
       <meta property='og:site_name' content="Zaid | Freelance Front-end Developer & Web Designer" key='ogsitename' />
       <link rel="icon" type="svg+xml"  href="../images/favicon.svg"/>
       <link rel="alternate icon"  href="../images/favicon.svg"/>
      </Helmet>
      <GlobalStyles />
      <Nav />
   		{children}
      <Footer />
   		</>
  )
}

export default Layout;