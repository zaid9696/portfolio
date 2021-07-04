
import styled from 'styled-components';

const HeroStyles = styled.div`
		background-color: var(--third);
		height: 500px;
    @media (max-width: 722px) {
      height: 400px;
    }
    .banners {
      width: 100%;
      height: 500px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
    }

    .banner {
        height: 100%;
    @media (max-width: 722px) {
        height: 80%
      }
        background-color: var(--main);
        width: 70%;

      &:nth-child(1) {
          
      }

      &:nth-child(2) {
          height: 80%;
          @media (max-width: 722px) {
          height: 60%;
        }
      }

      &:nth-child(3) {
          height: 60%;
          @media (max-width: 722px) {
           height: 40%
         }
      }
    };

    .content {
      position: absolute;
      top: 24%;
      width: auto;
    }

    h1 {

      color: #fff;
      font-size: 3rem;
      @media (max-width: 990px) {
        font-size: 2rem;
      }
      @media (max-width: 650px) {
          font-size: 1.4rem;
       }
      line-height: 125%;
      letter-spacing: 1.7px;
      text-transform: capitalize;
      span {
       font-family: 'Rock Salt', cursive;
        font-size: 2.5rem;
       @media (max-width: 990px) {
        font-size: 2rem;
       }
       @media (max-width: 650px) {
          font-size: 1.4rem;
       }
        text-shadow: 1px 1px #ff304f;
        transition all 0.2s ease;
        &:hover {
          text-shadow: 3px 3px #ff304f;
        }
        }
    }

    button {
      padding: 1rem 2.5rem;
      @media (max-width: 650px) {
           padding: 1rem 2rem;
       }
      border-radius: 43px;
      border: none;
      font-size: 1.6rem;
       @media (max-width: 990px) {
        font-size: 1.2rem;
      }
      @media (max-width: 650px) {
          font-size: 1rem;
       }
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      background-color: var(--secondary);
      color: #fff;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(.97,1.02,0,.8);
      &:hover {

        box-shadow: 0px 0px 16px 4px #ff304f7a;

      }
    }

    .shape {

      position: absolute;
      @media (max-width: 990px) {
        width: 80px;
      }
      @media (max-width: 722px) {
        width: 50px;
      }
      &:nth-child(1) {
        top: -24%;
        right: 34%;
      @media (max-width: 990px) {
        right: 29%;
      }

      @media (max-width: 722px) {
        right: 52%;
        top: -38%;

      }

      }
      &:nth-child(2) {
        top: -15%;
        right: -11%;
      @media (max-width: 990px) {
        top: -13%;
        right: -15%;
      }
      @media (max-width: 722px) {
        top: -30%;
        right: 19%;
      }
      }
      &:nth-child(3) {
        top: 74%;
        right: -35%;
        @media (max-width: 1170px) {
          right: -12%;
        }

      @media (max-width: 990px) {
          right: 0%; 
      }
      @media (max-width: 722px) {
        right: 7%;
      }
      }

      &:nth-child(4) {
        top: 85%;
        left: 35%;
      @media (max-width: 990px) {
        top: 112%;
      }
      }

    }

`;


export default HeroStyles;