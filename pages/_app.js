import { motion } from 'framer-motion'
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  
  return (
    <motion.div key={router.route}>
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp


/* 
initial="pageInitial" animate="pageAnimate" variants={{
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
}}
*/