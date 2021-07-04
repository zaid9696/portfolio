import styled from 'styled-components';

const NavStyles = styled.nav`

	position: fixed;
    inset: 0;
    height: 100px;
    z-index: 100;
    .container {
    	display:flex;
    	justify-content: space-between;
    	align-items: center;
    	color: #fff;
    	height: 95px;
    }
    transition: all 0.6s cubic-bezier(0.4, 0, 1, 1);
    &.active {
    	background-color: var(--main);
    	height: 69px;
    	box-shadow:1px 2px 17px 1px #00000091;
    	.logo {
    		position: relative;
    		top: -12px;
    		font-size: 1.5rem;
    		transition: all 0.6s cubic-bezier(0.4, 0, 1, 1);

    	}

    	ul {
    		margin-top: 0;
    	}
    }

    .logo {

    	font-family: 'Rock Salt', cursive;
    	font-size: 2rem;
	    @media (max-width: 710px) {
	    	font-size: 1.5rem;
	    	position: relative;
    		top: -12px;
	    }
    	cursor:pointer;
    	text-shadow: 1px 1px #ff304f;
		transition all 0.2s ease;
    	&:hover {

    		text-shadow: 3px 3px #ff304f;
    	}
    }

    ul {

    	list-style: none;
    	display: grid;
    	grid-template-columns: repeat(4,min-content);
   		column-gap: 40px;
   		opacity:0;
   		@media (min-width: 715px) {
   			transform: translateY(0%) !important;
   			opacity: 1 !important;
   		}
   		
   		}

    li{
    		margin: 0;
    		padding: 0;
    		text-transform: uppercase;
		    letter-spacing: 1px;
		    font-size: 1.3rem;
		    font-weight: 400;

		    a {
		    	transition all 0.9s ease-in-out;
		    	cursor: pointer;
		    	&:hover, &.activelink {
		    		color: var(--secondary);
		    	}
		    }
    	}

    }

    @media (max-width: 710px) {

    	ul {
   			transform: translateY(-100%);
   			margin: 0;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    width: 100%;
		    height: 100%;
		    position: fixed;
		    top: 0;
		    right: 0;
		    background-image: linear-gradient(to right bottom,#010c2d,#381c53,#7e1c69,#381c53,var(--main));

		    li {
		    		margin-bottom: 55px;
		    		margin-right: 20px;
				    a {
			    		font-size: 1.8rem;
					    font-weight: 500;
					    text-shadow: 1px 2px 8px #00071b54;
					    letter-spacing: 4px;
				    }
    			}
    }

    @media (max-width: 500px) {

    	ul {

    		li {
    		margin-bottom: 40px;
    		a {
    			font-size: 1.5rem;
    		}
    	}
    	}
    }

    .menu {

    	cursor: pointer;
    	position: relative;
    	top: -6px;
    	z-index:1;
    	// display:none;
    	span {

    			background-color: #fff;
			    width: 41px;
			    height: 2px;
			    display: block;
			    margin-bottom: 11px;
			    box-shadow:1px 1px 8px 2px #0000003b;
			    transition:all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    		}

    	&.close {
    			span:nth-child(1) {
    				opacity: 0;
    			}
    			span:nth-child(2) {
    				transform:rotate(44deg);
    				height:3px;
    			}
    			span:nth-child(3) {
    				height:3px;
    				transform:rotate(311deg) translate(10px, -10px);
    			}

    	}		
    }

`;


export default NavStyles;