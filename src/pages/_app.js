import '@/styles/globals.css'
import { Provider } from 'react-redux'
import indexStore from '../store/index'


export default function App({ Component, pageProps }) {
  return( 
      <Provider store={indexStore}>
        <Component {...pageProps} />
      </Provider>
    )
}
