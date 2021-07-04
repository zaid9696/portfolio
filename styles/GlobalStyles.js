import {createGlobalStyle} from 'styled-components';
// import {menuActive} from '../components/Nav';

// console.log(menuActive);

const GlobalStyles  = createGlobalStyle`

		
		* {
  			box-sizing: border-box;
		}
	
		:root {
			--red: red;
			--black: #1B1B1B;
			--main: #010C2D;
			--secondary: #FF304F;
			--third: #00071B;
			--green: #17B978;
			--blue: #2359A7;
		}

		html {

			font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
   						 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   			  scroll-behavior: smooth;			 
		}

		body::-webkit-scrollbar {

			width: 13px;
		}

		body {
			padding: 0;
  			margin: 0;
  			color: var(--black);
  			scrollbar-width: thin;
  			scrollbar-color:  var(--secondary);
  			// font-family: 'Rock Salt', cursive;
		}

		body::-webkit-scrollbar-track {
			background: #fff;
		}

		body::-webkit-scrollbar-thumb {

			background-color: var(--secondary);
			border-radius: 6px;
			border: 3px solid #fff;
		}
		::selection {

			background-color: var(--secondary);
			color: var(--main);
		}

		a {
  			color: inherit;
  			text-decoration: none;
		}

		h2.title{
    	text-align: center;
	    color: #fff;
	    font-size: 3rem;
	    @media (max-width: 600px) {
	    	font-size: 2.3rem;
	    }
	    text-transform: uppercase;
	    letter-spacing: 1.7px;
	    text-shadow:2px 2px 8px #00071b52;
    }

`;

export default GlobalStyles;