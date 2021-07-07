import styled from 'styled-components';

const PortfolioItemsStyles = styled.div`

	
	.portfolios {
		display: grid;
    	grid-template-columns: 1fr 1fr;
    	@media (max-width: 970px) {
    		grid-template-columns: 1fr;	 	
    	}
    	gap: 2.5rem;
    	margin-top: 6rem;
     	@media (max-width: 500px) {
     		margin-top: 3rem;
     	}
    	padding-bottom: 2rem;

    	.portfolio {
    		.overlay {
    		position: relative;
    		border-radius: 5px;
    		background-color: var(--main);
    		box-shadow:0px 0px 14px 0px #ff304f4d;
    			img {
    			border-radius: 5px;
    			}

    		&:before {
    			content: '';
    			position: absolute;
    			top: 0;
    			left: 0;
    			background-color: #010c2dbf;
    			width:100%;
    			height: 100%;
    			z-index: 3;
    			border-radius: 5px;
    		}
    	}

    	img {
    		width: 100%;
    	}

    	.info {

    		display: grid;
    		grid-template-columns: 1fr 1fr;
    		gap: 150px;
    		@media (max-width: 560px) {
    			gap: 85px;
    		}
    		span {
    		&:last-child{
    			margin-left: 0px;
    			margin-right: 4px;
    			a {margin-top: 1.5px;}
    		}

    		transition: all 1s cubic-bezier(.17,.67,0,1.71);
    		background-color: var(--main);
    		position: relative;
    		top: -53px;
    		z-index: -1;
	    	opacity: 1;
    		border-radius: 0px 0px 5px 5px;
    		margin-left: 4px;
    		padding: 6px;
    		text-align:center;
    		box-shadow:0px 0px 14px 0px #ff304f4d;
    		a {
    			display: flex;
    			justify-content: center;
    			align-items: center; 
    			font-size: 1.2rem;
     		@media (max-width: 500px) {
     			font-size: 0.7rem;
     			&:first-child {
     				position: relative;
     				top: 1px;
     			}
     		}

			    color: var(--secondary);
			    text-transform: uppercase;
			    letter-spacing: 1.5px;
			    font-weight: 100;
			    div {margin-left: 5px}
    		} 

    		}

    	.linkIcon {

    		position: relative;
    		top: 3px;
    		right: 1px;
    		@media (max-width: 560px) {
			width: 33px;
    		}
     		@media (max-width: 500px) {
     		width: 20px;
     		top:1px;
     		}

    	}

    	.gitIcon {

     		@media (max-width: 500px) {
    			width: 20px;
    		}
    	}
    		
    	}

    	h3 {
    		position: absolute;
		    top: 29%;
		    width: 100%;
		    text-align: center;
		    color: beige;
		    z-index: 5;
		    font-size: 2rem;
		    letter-spacing: 2px;
		    opacity: 0;
    		transition: all 1s cubic-bezier(.17,.67,0,1.71);
    	@media (max-width: 560px) {
		    	font-size: 1.2rem;
		    	top: 23%;
		    }
    	}	
    	&:hover {
	    	span {
	    			top: 0;
	    			z-index:1;
	    			opacity: 1;
	    	}

	    	h3 {
	    		opacity: 1;
	    	}
    	}


    }

    }

    .btn {
    	width: 205px;
	    margin: 0px auto;
	    display: block;
	    height: 58px;
	    font-size: 1.4rem;
    	@media (max-width: 560px) {
    		width: 150px;
    		height: 50px;
    		font-size: 1.2rem;
	    }
	    font-weight: 600;
	    letter-spacing: 1.1px;
	    border-radius: 43px;
	    border: 2px solid;
	    background: var(--main);
	    color: #fff;
	    cursor: pointer;
	    margin-bottom: 2rem;
	    transition: all 0.3s ease-in-out;
	    &:hover {
	    	box-shadow:0px 0px 18px 0px #2359a76b;
	    }
    }

`;


export default PortfolioItemsStyles;