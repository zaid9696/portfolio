import Image from 'next/image';
import ContentStyles from '../styles/ContentStyles';
import ContactStyles from '../styles/ContactStyles';


const Contact = (props) => {
  return (
  	<>
    <ContactStyles id="contact">
    	<ContentStyles>
    		<div className="grid-center">
    			<h2 className="title">get in touch</h2>
    			<div>
    				<form  className="form"  method="POST" data-netlify="true">

            <div className="inputs">
                <label htmlFor="name" className="hidden">Name</label>
                <input id="name" type="text" name="name" placeholder="Name" />
                <label htmlFor="email" className="hidden">Email</label>
                <input id="email" type="email" name="email"placeholder="Email" />
            </div>
            <label htmlFor="message" className="hidden">Message</label>
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <input type="submit" id="btn" value="Send" />
            

        	</form>
    			</div>	
    		</div>
    	</ContentStyles>
    </ContactStyles>
    </>
  )
}


export default Contact;