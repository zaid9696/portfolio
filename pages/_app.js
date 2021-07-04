import {useEffect} from 'react';
import Layout from '../components/Layout';
import TagManager from 'react-gtm-module'




function MyApp({ Component, pageProps }) {

  useEffect(() => {

      
    TagManager.initialize({gtmId: 'GTM-WR6KV3C'});
      

  }, [])

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
