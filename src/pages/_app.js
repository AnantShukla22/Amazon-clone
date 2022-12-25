import { SessionProvider as AuthProvider} from "next-auth/react"
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>

    <AuthProvider session={pageProps.session}>
    <Component {...pageProps} />
  </AuthProvider>
  </Provider>

  )
}

export default MyApp

