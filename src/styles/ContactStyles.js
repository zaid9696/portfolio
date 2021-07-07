import styled from 'styled-components';
import contactBG from '../images/contact/contact.svg';

const ContactStyles = styled.div`

	background-image: url(${contactBG});
	background-repeat: no-repeat;
  background-size: cover;
  margin-top: -1px;

  h2 {margin-bottom: 5rem;}

  form {

    .hidden {
      position:absolute;
      left:-10000px;
      top:auto;
      width:1px;
      height:1px;
      overflow:hidden;
    }

    .inputs {

      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 800px) {
        grid-template-columns: 1fr;

      }
      gap: 2rem;
      justify-items: center;
      input {
        width: 90%;
      @media (max-width: 800px) {
        width: 100%;
      }
        height: 53px;
        border-radius: 36px;
        padding: 15px;
        border: 2.0px solid #2359a7;
        font-size: 1.24rem;
        box-shadow:0px 0px 3px 1px #00000059;
        outline: none;
        color: var(--main);
        transition: all 0.4s ease-in-out;
        &:focus {
          box-shadow: 0px 0px 22px -2px var(--blue);
        }
      }

    }

    textarea {
      display: block;
      width: 89%;
      margin: auto;
      height: 285px;
      margin-top: 34px;
      border-radius: 18px;
      padding: 15px;
      border: 2.0px solid #2359a7;
      font-size: 1.24rem;
      box-shadow: 0px 0px 3px 1px #00000059;
      outline: none;
      color: var(--main);
      transition: all 0.4s ease-in-out;
      @media (max-width: 800px) {
        width: 100%;
      }
       &:focus {
          box-shadow: 0px 0px 22px -2px var(--blue);
        }
    }


    #btn {

        width: 152px;
        margin: 0px auto;
        display: block;
        height: 54px;
        font-size: 1.4rem;
      @media (max-width: 800px) {
        width: 135px;
        height: 47px;
        font-size: 1.2rem;
      }
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 45px;
        letter-spacing: 3.1px;
        border-radius: 43px;
        border: 2px solid var(--blue);
        background: var(--main);
        color: #fff;
        cursor: pointer;
        margin-bottom: 2rem;
        transition: all 0.3s ease-in-out;
        &:hover, &:focus {
          box-shadow:0px 0px 18px 0px var(--blue);
      }
    }

  }


`;

export default ContactStyles;